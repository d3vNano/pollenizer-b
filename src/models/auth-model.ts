import joi from "joi";
import { SignInParams } from "@/protocols";


export const signInSchema = joi.object<SignInParams>({
    email: joi.string().email().required(),
    password: joi.string().required()
})