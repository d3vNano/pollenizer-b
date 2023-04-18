import joi from "joi"
import { CreateUserAndAddressParams } from "@/protocols"

export const createUserandAddressSchema = joi.object<CreateUserAndAddressParams>({
    cpf: joi.string().length(11).required(),
    user_name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    phone: joi.string().length(11).required(),
    photo: joi.string(),
    password: joi.string().min(6).required(),
    zip_code: joi.string().length(8).required(),
    street: joi.string().required(),
    number: joi.string().required(),
    complement: joi.string(),
    district: joi.string().required(),
    city: joi.string().required(),
    state: joi.string().min(2).required()
})
