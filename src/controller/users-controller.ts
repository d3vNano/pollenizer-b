import { Request, Response } from "express";
import { CreateUserAndAddressParams } from "@/protocols";
import { usersService } from "@/services";
import httpStatus from "http-status";


export async function usersPost(req: Request, res: Response) {
    const { cpf, name, email, phone, photo, password, zip_code, street, number, complement, district, city, state } = req.body as CreateUserAndAddressParams

    try {
        const user = await usersService.createUser({ cpf, name, email, phone, photo, password, zip_code, street, number, complement, district, city, state })
        return res.status(httpStatus.CREATED).json({
            id: user.id,
            email: user.email
        })
    } catch (error) {
        /*
        if (error.name === "DuplicatedEmailError") {
            return res.status(httpStatus.CONFLICT).send(error)
        }
        */
        return res.status(httpStatus.BAD_REQUEST).send(error)
    }
}