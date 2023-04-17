import joi from "joi";
import { GetBusinessAndServicesData } from "@/protocols";


export const businessSchema = joi.object<GetBusinessAndServicesData>({
    title: joi.string().required(),
    sub_title: joi.string().required(),
    logo: joi.string().required(),
    category: {
        label: joi.string().required()
    },
    photos: {
        a: joi.string().required(),
        b: joi.string().required(),
        c: joi.string().required(),
        d: joi.string().required()
    },
    address: {
        zip_code: joi.string().length(8).required(),
        street: joi.string().required(),
        number: joi.string().required(),
        complement: joi.string(),
        district: joi.string().required(),
        city: joi.string().required(),
        state: joi.string().required()
    },
    favorites: {
        user_id: joi.number().required(),
        busines_id: joi.number().required()
    },
    assessments: {
        user_id: joi.number().required(),
        busines_id: joi.number().required()
    },
    services: [
        {
            name: joi.string().required(),
            description: joi.string().required(),
            price: joi.number().required(),
            category: {
                label: joi.string().required()
            },
            business_id: joi.number().required()
        }
    ]
})