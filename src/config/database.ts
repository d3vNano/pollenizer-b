import { PrismaClient } from '@prisma/client'

export let db: PrismaClient;

export function connectDB(): void {
    db = new PrismaClient()
}

export async function disconnectDB(): Promise<void> {
    await db?.$disconnect()
}