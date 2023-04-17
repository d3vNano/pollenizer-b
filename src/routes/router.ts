import { Router } from "express"
import { authRouter, businessRouter, usersRouter } from "@/routes"


const router = Router()

router
    .use("/auth", authRouter)
    .use("/users", usersRouter)
    .use("/business", businessRouter)


export default router