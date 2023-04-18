import { Router } from "express";
import { getBusinessCategories, getBusiness, renderBusiness } from "@/controller";


export const businessRouter = Router()

businessRouter.get("/categories", getBusinessCategories)
businessRouter.get("/data", getBusiness)
businessRouter.get("/:businessId", renderBusiness)
