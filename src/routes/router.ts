import { Router } from "express"
import { authRouter, homeRouter, usersRouter } from "@/routes"


const router = Router()

router
    .use("/auth", authRouter)
    .use("/users", usersRouter)
    .use("/home", homeRouter)
//.use("/business")



export default router