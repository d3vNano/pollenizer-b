import express from "express"

const app = express()

app.use("/health", (req, res) => { return res.send("wee") })

app.listen(4000, () => {
    console.log("wee")
})