// 📄 File: server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Sử dụng port do Render cung cấp hoặc mặc định là 3000
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log("JSON Server is running on port " + port);
});
