import { Router } from "express"
import { authRouter } from "@/routes"


const router = Router()

router
    .use("/auth", authRouter)
//    .use("auth")
//    .use("home")
//    .use("business")



export default router