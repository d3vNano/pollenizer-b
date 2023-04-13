import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

import { ValidationMiddleware } from "@/protocols"
import { invalidDataError } from "@/errors";

export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
    return validate(schema, "body")
}

export function validateParams<T>(schema: ObjectSchema<T>): ValidationMiddleware {
    return validate(schema, "params")
}

export function validate<T>(schema: ObjectSchema<T>, type: "body" | "params") {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[type], {
            abortEarly: false,
        })

        if (!error) {
            next()
        } else {
            res.status(httpStatus.BAD_REQUEST).send(invalidDataError(error.details.map(detail => detail.message)))
        }
    }
}