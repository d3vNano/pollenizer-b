import { db } from "@/config";
import { Prisma } from "@prisma/client";

export async function createSession(data: Prisma.SessionUncheckedCreateInput) {
    return db.session.create({
        data,
    })
}

export async function sessionIsOpen(user_id: number) {
    return db.session.findFirst({
        where: {
            user_id
        }
    })
}