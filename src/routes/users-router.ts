import { Router } from "express";
import { validateBody } from "@/middlewares";
import { createUserandAddressSchema } from "@/models";
import { usersPost } from "@/controller";


export const usersRouter = Router()

usersRouter.post("/register", validateBody(createUserandAddressSchema), usersPost)