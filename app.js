const http = require("http");
const server = http.createServer((request, response) => {
  response.end("Hello World!");
});

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Servidor ejecutandose en http://${host}:${port}`);
});
