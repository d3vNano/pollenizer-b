import joi from "joi";
import { loginParams } from "@/protocols";


export const loginSchema = joi.object<loginParams>({
    email: joi.string().email().required(),
    password: joi.string().required()
})