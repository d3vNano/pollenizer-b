import { Router } from "express"

import { testRouter } from "@/routes"

const router = Router()

router.use(testRouter)

export default router