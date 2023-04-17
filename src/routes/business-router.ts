import { Router } from "express";
import { getBusiness, renderBusiness } from "@/controller";


export const businessRouter = Router()

businessRouter.get("/data", getBusiness)
businessRouter.get("/:businessId", renderBusiness)
