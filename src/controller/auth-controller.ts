import { Request, Response } from "express";
import httpStatus from "http-status";

import { loginParams } from "@/protocols";
import { authService } from "@/services";

export async function loginPost(req: Request, res: Response) {
    const { email, password } = req.body as loginParams

    try {
        const result = await authService.login({ email, password })

        return res.status(httpStatus.OK).send(result)
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send(error)
    }
}