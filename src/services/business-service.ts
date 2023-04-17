import { GetBusinessAndServicesData } from "@/protocols"
import { businessRepository } from "@/repositories"

export async function listAllBusiness(): Promise<any> {
    return businessRepository.findManyBusinessData()
}