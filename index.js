require('dotenv').config()
var Koa = require('koa');
var Router = require('koa-router');
var Chai = require('chai'); var assert = Chai.assert;

var PORT = process.env.PORT;

assert(PORT != null, 'PORT env var is missing.')
 
var app = new Koa();
var router = new Router();
 
router.get('/', (ctx, next) => {
  // ctx.router available
});

router.get('/hello', (ctx, next) => {
    ctx.body = "Hello Node.js!";
});

router.get('/port', (ctx, next) => {
    ctx.body = "listening on port: " + PORT;
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);

console.log('listening on port:', process.env.PORT);
