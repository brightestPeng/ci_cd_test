const Koa = require("koa");
const Router = require("koa-router")();
const { add, substract } = require("./math/index");

const app = new Koa();

Router.get("/add", async (ctx) => {
  ctx.body = add(3, 4);
});

Router.get("/substract", async (ctx) => {
  ctx.body = substract(4, 1);
});

app.use(Router.routes());
app.use(Router.allowedMethods());

app.listen(3000, () => {
  console.log("listen on port 3000");
});
