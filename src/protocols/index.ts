import { User } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

export type ApplicationError = {
    name: string;
    message: string;
}

export type ApplicationInvalidateDataError = ApplicationError & {
    details: string[]
}

export type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;

export type SignInParams = Pick<User, "email" | "password">

export type SignInResult = {
    user: Pick<User, "id" | "email">;
    token: string;
    message?: string
}

export type GetUserOrFacilResult = Pick<User, "id" | "email" | "password">