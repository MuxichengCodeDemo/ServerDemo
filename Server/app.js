const Koa = require('koa');
const koaBody = require('koa-body')
const config = require('./config')
const routers = require('./routers')


async function StartApp(params) {
  let app = new Koa();
  app.use(koaBody());
  app.use(routers.routes());
  app.listen(config.port, () => {
    console.log('This server is running at http://localhost:' + config.port)
  })
}


StartApp();

