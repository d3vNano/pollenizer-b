import { Address, Business, Service, User } from "@prisma/client";
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
    user: Pick<User, "id" | "cpf" | "user_name" | "email" | "phone" | "photo">;
    token: string;
    message?: string
}

export type GetUserOrFacilResult = Pick<User, "id" | "cpf" | "user_name" | "email" | "phone" | "photo" | "password">

export type AuthenticatedRequest = Request & JWTPayload;

export type JWTPayload = {
    user_id: number;
}

export type CreateUserParams = Pick<User, "cpf" | "user_name" | "email" | "phone" | "photo" | "password">

export type CreateAddressParams = Pick<Address, "zip_code" | "street" | "number" | "complement" | "district" | "city" | "state">

export type CreateUserAndAddressParams = Pick<User & Address, "cpf" | "user_name" | "email" | "phone" | "photo" | "password" | "zip_code" | "street" | "number" | "complement" | "district" | "city" | "state">

export type GetBusinessAndServicesData = {
    id: number,
    title: string,
    sub_title: string,
    logo: string,
    category: {
        id: number,
        label: string
    },
    photos: {
        id: number,
        a: string,
        b: string
        c: string,
        d: string
    },
    address: {
        id: number,
        zip_code: string,
        street: string,
        number: string,
        complement?: string,
        district: string,
        city: string,
        state: string
    },
    favorites: {
        id?: number,
        user_id?: number,
        busines_id?: number
    },
    assessments: {
        id?: number,
        user_id?: number,
        busines_id?: number
    },
    services: [
        {
            id: number,
            name: string,
            description: string,
            price: number,
            category: {
                id: number,
                label: string
            },
            business_id: number
        }
    ]
}