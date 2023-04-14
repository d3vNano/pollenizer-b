import { Router } from "express";
import { validateBody } from "@/middlewares";
import { loginSchema } from "@/models";
import { loginPost } from "@/controller";


export const authRouter = Router()

authRouter.post("/login", validateBody(loginSchema), loginPost)