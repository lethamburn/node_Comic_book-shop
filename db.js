const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/comicsShop"; //tiene que tener el mongodb antes de la URL como aquí TODO EN MINUSCULA

const connect = () => {
  mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
      console.log("Conectado a la base de datos");
    })
    .catch((error) => {
      console.log("Ha ocurrido un error conectando a la base de datos", error);
    });
};

module.exports = {
  DB_URL,
  connect,
};
