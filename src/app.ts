import express, { json, Express } from "express"
import cors from "cors"

import router from "@/routes/router"
import { loadEnv, connectDB, disconnectDB } from "./config"

loadEnv();

const app = express()

app
    .use(cors())
    .use(json())
    .use("/health", (_req, res) => { res.send("OK!") })
    .use(router)

export function init(): Promise<Express> {
    connectDB()
    return Promise.resolve(app)
}

export async function close(): Promise<void> {
    await disconnectDB()
}

export default app;