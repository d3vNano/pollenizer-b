import { Prisma } from "@prisma/client";
import { db } from "@/config";

export async function findUserByEmail(email: string, select?: Prisma.UserSelect) {
    const params: Prisma.UserFindUniqueArgs = {
        where: {
            email,
        },
    };

    if (select) {
        params.select = select
    }

    return db.user.findUnique(params)
}