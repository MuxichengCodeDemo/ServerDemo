let Router = require('koa-router')
let router = new Router();

router.get('', async (ctx, next) => {
  await next();
  ctx.response.body = 'Hello, koa2!';
})

router.get('/Test', async (ctx, next) => {
  await next();
  ctx.response.body = 'Hello, koa2 test!';
})


module.exports = router;