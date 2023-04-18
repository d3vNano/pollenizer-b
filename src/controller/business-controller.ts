import { Request, Response } from "express";
import { businessService } from "@/services";
import { GetBusinessAndServicesData } from "@/protocols";

export async function getBusinessCategories(req: Request, res: Response) {

    const categories = await businessService.listAllBusinessCategories()

    return res.send(categories)
}
export async function getBusiness(req: Request, res: Response) {
    const result: GetBusinessAndServicesData = await businessService.listAllBusiness()

    return res.send(result)
}

export async function renderBusiness(req: Request, res: Response) {
    const { businessId } = req.params

    const data = await businessService.listBusinessById(Number(businessId))

    if (!data) {
        return res.send([])
    }

    return res.send(data)
}
