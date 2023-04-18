const Koa = require('koa');
const app = new Koa();
const Router = require('@koa/router')
const router = new Router();
const fs = require("fs");
const {join} = require("path");

router.prefix('/api');

// example
router.get('/html', async (ctx, next) => {
    ctx.type = "html";
    const filePath = join(__dirname, 'index.html');
    ctx.body = fs.readFileSync(filePath)
});
// get
router.get('/get', async (ctx, next) => {
    ctx.body = {
        name: 'get'
    }
})

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