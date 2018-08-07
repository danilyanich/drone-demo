const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'Dan Krachkouski'
})

app.listen(3000)
