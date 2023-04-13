import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

import dotenv from "dotenv"
dotenv.config()

import { createTests } from "./test-seed"


async function businessBaseCategories() {

    return prisma.category.createMany({
        data: [
            {
                "label": "Barbearia",
                "type": "business"
            },
            {
                "label": "Cabeleireiro",
                "type": "business"
            },
            {
                "label": "Manicure",
                "type": "business"
            },
            {
                "label": "Cílios",
                "type": "business"
            },
            {
                "label": "Sobrancelha",
                "type": "business"
            },
            {
                "label": "Massagista",
                "type": "business"
            },
            {
                "label": "Esteticista",
                "type": "business"
            },
            {
                "label": "Maquiador(a)",
                "type": "business"
            },
            {
                "label": "Cabelo",
                "type": "service"
            },
            {
                "label": "Barba",
                "type": "service"
            },
            {
                "label": "Nail Designer",
                "type": "service"
            },
            {
                "label": "Lash Designer",
                "type": "service"
            },
            {
                "label": "Brow Designer",
                "type": "service"
            },
            {
                "label": "Massagem",
                "type": "service"
            },
            {
                "label": "Estética",
                "type": "service"
            },
            {
                "label": "Maquiagem",
                "type": "service"
            }
        ], skipDuplicates: true
    })
}

async function main() {

    await businessBaseCategories().then(() => {
        console.log("Categorias-base de negócios criadas com sucesso!")
    })

    if (process.env.DATABASE_TYPE === "test") {
        createTests()
    }
}


main()
    .then(() => {
        console.log("Todas as tabelas populadas com sucesso!")
    })
    .catch(
        (e) => {
            console.error(e)
            process.exit(1)
        }
    ).finally(
        async () => {
            await prisma.$disconnect()
        }
    )