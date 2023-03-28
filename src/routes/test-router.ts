import { Router } from "express"

const testRouter = Router()

testRouter.get("/test", (req, res) => { res.send("OK") })

export { testRouter }