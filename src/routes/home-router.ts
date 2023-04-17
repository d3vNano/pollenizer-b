import { Router } from "express";
import { renderBusiness } from "@/controller";


export const homeRouter = Router()

homeRouter.get("/business", renderBusiness)