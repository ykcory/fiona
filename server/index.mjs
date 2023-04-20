// const Koa = require('koa');
import Koa from "koa";

const app = new Koa();
import {readFileSync} from "fs";
import {join} from "path";
import router from "./router.mjs";
import getServer from "./get-server.mjs";
import instanceServer from "./instance-server.mjs";

// example
router.get('/html', async (ctx, next) => {
    ctx.type = "html";
    const filePath = join(__dirname, 'index.html');
    ctx.body = readFileSync(filePath)
});

getServer();

instanceServer();

// post
router.post('/post', async (ctx, next) => {
    ctx.body = {
        name: 'post'
    }
})

// put
router.put('/put', async (ctx, next) => {
    ctx.body = {
        name: 'put'
    }
})

// delete
router.delete('/delete', async (ctx, next) => {
    ctx.body = {
        name: 'delete'
    }
})

app.use(router.routes());

console.log("server: http://localhost:3000")

app.listen(3000);