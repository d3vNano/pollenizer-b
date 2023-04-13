import { Router } from "express";
import { validateBody } from "@/middlewares";
import { signInSchema } from "@/models";
import { singInPost } from "@/controller";


export const authRouter = Router()

authRouter.post("/signin", validateBody(signInSchema), singInPost)