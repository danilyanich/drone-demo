const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  console.log('app.is.being.accessed');
  ctx.body = 'Dan Krachkouski';
});

app.listen(3000, () => console.log('app.is.running'));
