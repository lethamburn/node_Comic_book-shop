const mongoose = require("mongoose");

const Comic = require("../models/comics.model");

const DB_URL = "mongodb://localhost:27017/comicsShop"; //Esto es el nombre de la colección

const comicSeed = [
  {
    name: "The Sandman",
    subtitle: "...Dream a little dream of me",
    numberOfTheCollection: 3,
    numberTotalCollection: 75,
    image: "https://2.bp.blogspot.com/-Tzl9c22Cxg0/Vpy-XCMgVKI/AAAAAAAAOao/ViV9gVpSpVw/s1600-Ic42/RCO001.jpg",
    authors: "Neil Gaiman",
    numberOfPages: 26,
    dateOfUpload: "15/06/2021",
  },
  {
    name: "The Sandman",
    subtitle: "A hope in Hell",
    numberOfTheCollection: 4,
    numberTotalCollection: 28,
    image: "https://2.bp.blogspot.com/-yvwwJXhsih0/VpzAZCpUynI/AAAAAAAAPDQ/CQoU4I22E90/s1600-Ic42/RCO001.jpg",
    authors: "Neil Gaiman",
    numberOfPages: 52,
    dateOfUpload: "16/06/2021",
  }
];

//Con el mongoose nos vamos a conectar a la base de datos con la URL, ver si existe, si existe (en el Compass por ejemplo) borrarla y luego crearla:

mongoose
  .connect(DB_URL, { userNewUrlParser: true, userUnifiedTopology: true })
  //Esto hay que copiarlo y pegarlo porque son opciones de mongoose
  .then(async () => {
    console.log("Conectando a la DB desde seed");
    //Encontrar todo lo que hay en la base de datos:
    const allComics = await Comic.find();
    //Si tiene lenght esque existe y hay que borrarla y si no hay que crearla. Con el drop te la cargas.
    if (allComics.length) {
      await Comic.collection.drop();
      console.log("Coleccion eliminada de la base de datos");
    }
  })
  .catch((error) => {
    console.log("Error al eliminar la base de datos");
  })
  .then(async () => {
    await Comic.insertMany(comicSeed);
    console.log("Plantada la semilla");
  })
  .catch((error) => {
    console.log("No se ha podido plantar la semilla");
  })
  .finally(() => mongoose.disconnect());
