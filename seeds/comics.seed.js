const mongoose = require("mongoose");

const Comic = require("../models/Comic.model");

const DB_URL = "mongodb://localhost:27017/comic-book-shop"; //Esto es el nombre de la colección

const comicSeed = [
  {
    title: "The Sandman",
    subtitle: "Sleep of the Just",
    numberOfTheCollection: 1,
    numberTotalCollection: 75,
    image:
      "https://2.bp.blogspot.com/-CzWQBuj1xTE/Vpy6NROTgTI/AAAAAAAANNc/gmQ7APrrMUw/s1600-Ic42/RCO001.jpg",
    authors: "Neil Gaiman",
    numberOfPages: 42,
    dateOfUpload: "15/06/2021",
    score: "4/5",
  },
  {
    title: "The Sandman",
    subtitle: "Imperfect Hosts",
    numberOfTheCollection: 2,
    numberTotalCollection: 75,
    image:
      "https://2.bp.blogspot.com/-fbhsCOSWtRY/Vpy8Y3I2eMI/AAAAAAAAN0U/5uZh4-lpUFc/s1600-Ic42/RCO001.jpg",
    authors: "Neil Gaiman",
    numberOfPages: 26,
    dateOfUpload: "15/06/2021",
    score: "4/5",
  },
  {
    title: "The Sandman",
    subtitle: "...Dream a little dream of me",
    numberOfTheCollection: 3,
    numberTotalCollection: 75,
    image:
      "https://2.bp.blogspot.com/-Tzl9c22Cxg0/Vpy-XCMgVKI/AAAAAAAAOao/ViV9gVpSpVw/s1600-Ic42/RCO001.jpg",
    authors: "Neil Gaiman",
    numberOfPages: 26,
    dateOfUpload: "15/06/2021",
    score: "4/5",
  },
  {
    title: "The Sandman",
    subtitle: "Hope in Hell",
    numberOfTheCollection: 4,
    numberTotalCollection: 75,
    image:
      "https://2.bp.blogspot.com/-yvwwJXhsih0/VpzAZCpUynI/AAAAAAAAPDQ/CQoU4I22E90/s1600-Ic42/RCO001.jpg",
    authors: "Neil Gaiman",
    numberOfPages: 26,
    dateOfUpload: "15/06/2021",
    score: "4/5",
  },
  {
    title: "The Sandman",
    subtitle: "Passengers",
    numberOfTheCollection: 6,
    numberTotalCollection: 75,
    image:
      "https://2.bp.blogspot.com/-FT2cPmtImhQ/VpzCfcHQt1I/AAAAAAAAPpo/-N7UdLzvsQg/s1600-Ic42/RCO001.jpg",
    authors: "Neil Gaiman",
    numberOfPages: 26,
    dateOfUpload: "15/06/2021",
    score: "5/5",
  },
  {
    title: "The Sandman",
    subtitle: "24 Hours",
    numberOfTheCollection: 6,
    numberTotalCollection: 75,
    image:
      "https://2.bp.blogspot.com/-DGmkID4pH4Y/VpzD86M9xJI/AAAAAAAAQF8/ryDRjk9yxyw/s1600-Ic42/RCO001.jpg",
    authors: "Neil Gaiman",
    numberOfPages: 26,
    dateOfUpload: "15/06/2021",
    score: "4/5",
  },
  {
    title: "The Sandman",
    subtitle: "Sound and Fury",
    numberOfTheCollection: 7,
    numberTotalCollection: 75,
    image:
      "https://2.bp.blogspot.com/-HNwU915KnNw/VpzEJAkk_5I/AAAAAAAAQJc/fZ3P3lOObBU/s1600-Ic42/RCO001.jpg",
    authors: "Neil Gaiman",
    numberOfPages: 26,
    dateOfUpload: "15/06/2021",
    score: "5/5",
  },
  {
    title: "The Sandman",
    subtitle: "The Sound of Her Wings",
    numberOfTheCollection: 8,
    numberTotalCollection: 75,
    image:
      "https://2.bp.blogspot.com/-w-p8n2VmY8E/VpzEVi6BDxI/AAAAAAAAQM4/j36U1GWkckU/s1600-Ic42/RCO001.jpg",
    authors: "Neil Gaiman",
    numberOfPages: 26,
    dateOfUpload: "15/06/2021",
    score: "4/5",
  },
  {
    title: "The Sandman",
    subtitle: "Tales in the Sand",
    numberOfTheCollection: 9,
    numberTotalCollection: 28,
    image:
      "https://2.bp.blogspot.com/-bTbqn_Eska4/VpzEgjRfIMI/AAAAAAAAQQQ/PMcEct7fA6k/s1600-Ic42/RCO001.jpg",
    authors: "Neil Gaiman",
    numberOfPages: 52,
    dateOfUpload: "16/06/2021",
    score: "5/5",
  },
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
