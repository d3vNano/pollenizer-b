import { Prisma } from "@prisma/client";
import { db } from "@/config";

export async function createAddress(data: Prisma.AddressUncheckedCreateInput) {
    return db.address.create({
        data,
    })
}