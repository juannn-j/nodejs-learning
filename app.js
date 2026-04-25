const express = require("express");
const app = express();
const userRoute = require("./src/routes/userRoute.js");

app.get("/", (req, res) => {
  console.log("servidor creado con express.js");
});

app.use("/users", userRoute);

app.listen(3000, () => {
  console.log("Aplicacion con express, ejecutandose en el puerto 3000");
});
