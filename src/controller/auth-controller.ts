import { Request, Response } from "express";
import httpStatus from "http-status";

import { SignInParams } from "@/protocols";
import { authService } from "@/services";

export async function singInPost(req: Request, res: Response) {
    const { email, password } = req.body as SignInParams

    try {
        const result = await authService.signIn({ email, password })

        return res.status(httpStatus.OK).send(result)
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send(error)
    }
}