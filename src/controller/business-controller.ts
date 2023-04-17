import { Request, Response } from "express";
import { businessService } from "@/services";
import { GetBusinessAndServicesData } from "@/protocols";

export async function renderBusiness(req: Request, res: Response) {
    const result: GetBusinessAndServicesData = await businessService.listAllBusiness()

    return res.send(result)
}