import router from "./router.mjs"

export default function getServer() {
    // get
    router.get('/get', async (ctx, next) => {
        ctx.body = {
            name: 'get'
        }
    })

// get with params
    router.get('/get/params/:name', async (ctx, next) => {
        ctx.body = {
            name: ctx.params.name
        }
    });

// get with query
    router.get('/get/query', async (ctx, next) => {
        ctx.body = ctx.query
    })
}