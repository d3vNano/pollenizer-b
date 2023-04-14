import { Response, NextFunction } from "express";
import httpStatus from "http-status";
import jwt, { Secret } from "jsonwebtoken"

import { db } from "@/config";
import { unauthorizedError } from "@/errors";
import { AuthenticatedRequest, JWTPayload } from "@/protocols";

export async function authToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header("Authorization")

    if (!authHeader) return res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError())

    const token = authHeader.split(" ")[1];

    if (!token) return res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError())

    try {
        const { user_id } = jwt.verify(token, process.env.JWT_SECRET as Secret) as JWTPayload
        const session = await db.session.findFirst({
            where: {
                token
            }
        })

        if (!session) return res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError())

        req.user_id = user_id

        return next()
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send(error)
    }
}
