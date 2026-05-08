import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
import userRoute from "./src/routes/userRoute.js";
import connection from './database/connection.js';

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  const data = {
    title: 'titulo de la pagina',
    message: 'Bienvenido a mi sitio web',
    showMessage: true,
    items: [1, 2, 3, 4]
  }
  res.render('index', data);
});

app.use(express.json());
app.use("/users", userRoute);

app.listen(3000, () => {
  console.log("Aplicacion con express, ejecutandose en el puerto 3000");
});
