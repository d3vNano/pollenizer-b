import app, { init } from "@/app"

const PORT = process.env.PORT || 4000

init().then(() => {
    app.listen(PORT, () => {
        console.log(`The server is listening on port: ${PORT}`)
    });
});