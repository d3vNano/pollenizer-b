import { Prisma } from "@prisma/client";
import { db } from "@/config";

export async function findUserByEmail(email: string) {
    const params: Prisma.UserFindUniqueArgs = {
        where: {
            email,
        },
        select: {
            id: true,
            user_name: true,
            cpf: true,
            email: true,
            phone: true,
            photo: true,
            password: true,
            address: {
                select: {
                    id: true,
                    zip_code: true,
                    street: true,
                    number: true,
                    complement: true,
                    district: true,
                    city: true,
                    state: true
                }
            }

        }
    };

    return db.user.findUnique(params)
}

export async function createNewUser(data: Prisma.UserUncheckedCreateInput) {
    return db.user.create({
        data,
    })
}