import express, { json } from "express"
import cors from "cors"

import router from "@/routes/router"

const app = express()

app
    .use(cors())
    .use(json())
    .use("/health", (req, res) => { res.send("OK!") })
    .use(router)

export default app