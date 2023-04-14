import { Router } from "express"
import { authRouter, usersRouter } from "@/routes"


const router = Router()

router
    .use("/auth", authRouter)
    .use("/users", usersRouter)
//    .use("home")
//    .use("business")



export default router