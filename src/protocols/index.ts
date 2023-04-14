import { Address, User } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

export type RequestError = {
    status: number,
    data: object | null,
    statusText: string,
    name: string,
    message: string,
}

export type ApplicationError = {
    name: string;
    message: string;
}

export type ApplicationInvalidateDataError = ApplicationError & {
    details: string[]
}

export type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;

export type loginParams = Pick<User, "email" | "password">

export type SignInResult = {
    user: Pick<User, "id" | "email">;
    token: string;
    message?: string
}

export type GetUserOrFacilResult = Pick<User, "id" | "email" | "password">

export type AuthenticatedRequest = Request & JWTPayload;

export type JWTPayload = {
    user_id: number;
}

export type CreateUserParams = Pick<User, "cpf" | "name" | "email" | "phone" | "photo" | "password">

export type CreateAddressParams = Pick<Address, "zip_code" | "street" | "number" | "complement" | "district" | "city" | "state">

export type CreateUserAndAddressParams = Pick<User & Address, "cpf" | "name" | "email" | "phone" | "photo" | "password" | "zip_code" | "street" | "number" | "complement" | "district" | "city" | "state">


