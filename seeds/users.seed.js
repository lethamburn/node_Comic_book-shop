const mongoose = require("mongoose");

const User = require("../models/users.model");

const DB_URL = "mongodb://localhost:27017/comicsShop"; //Esto es el nombre de la colección

const userSeed = [
  {
    name: "Antonio",
    adress: "Rosales Martinez",
    location: "Madrid",
    country: "Spain",
    password: "12345",
  },
];

//Con el mongoose nos vamos a conectar a la base de datos con la URL, ver si existe, si existe (en el Compass por ejemplo) borrarla y luego crearla:

mongoose
  .connect(DB_URL, { userNewUrlParser: true, userUnifiedTopology: true })
  //Esto hay que copiarlo y pegarlo porque son opciones de mongoose
  .then(async () => {
    console.log("Conectando a la DB desde seed");
    //Encontrar todo lo que hay en la base de datos:
    const allUsers = await User.find();
    //Si tiene lenght esque existe y hay que borrarla y si no hay que crearla. Con el drop te la cargas.
    if (allUsers.length) {
      await User.collection.drop();
      console.log("Coleccion eliminada de la base de datos");
    }
  })
  .catch((error) => {
    console.log("Error al eliminar la base de datos");
  })
  .then(async () => {
    await User.insertMany(userSeed);
    console.log("Plantada la semilla");
  })
  .catch((error) => {
    console.log("No se ha podido plantar la semilla");
  })
  .finally(() => mongoose.disconnect());
