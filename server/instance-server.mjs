import router from "./router.mjs";

export default function instanceServer() {
    router.get("/instance/headers", (ctx, next) => {
        console.log(ctx.header, "ctx")
        ctx.body = {
            authentication: ctx.header.authentication
        }
    })
}

