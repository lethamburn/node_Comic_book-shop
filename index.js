const express = require("express");
const db = require("./db");
const path = require("path"); //Esto hace falta para que abajo se pueda usar el path en la carpeta views y public
const comicsRoute = require("./routes/comics.route");
const usersRoute = require("./routes/users.route");

//Esto conecta con el db.js, ya que lo hemos exportado al final del archivo
db.connect();

const PORT = 3000;

const server = express();
const router = express.Router();

///////////////////////////////////
server.use(express.static(path.join(__dirname, "public")));

server.set("views", path.join(__dirname, "views"));

server.set("view engine", "hbs");

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

///////////////////////////////////

router.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

/* server.use("/", router); */
server.use("/comics", comicsRoute);
server.use("/users", usersRoute);

server.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
