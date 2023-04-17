import { businessRepository } from "@/repositories"

export async function listAllBusiness(): Promise<any> {
    return businessRepository.findManyBusinessData()
}

export async function listBusinessById(business_id: number): Promise<any> {
    return businessRepository.findBusinessById(business_id)
}