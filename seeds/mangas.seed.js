const mongoose = require("mongoose");

const Manga = require("../models/Manga.model");

const DB_URL = "mongodb://localhost:27017/comic-book-shop"; //Esto es el nombre de la colección

const mangaSeed = [
  {
    title: "Berserk",
    subtitle: "The Wind of Swords",
    numberOfTheCollection: 1,
    numberTotalCollection: 365,
    image: "https://cdn.readberserk.com/file/AnimeRleases/Berserk_1_001.jpg",
    authors: "	Kentaro Miura",
    numberOfPages: 125,
    dateOfUpload: "15/06/2021",
    score: "5/5",
    idUser: "60ce27426afbce2dc8bf0693",
  },
  {
    title: "Berserk",
    subtitle: "Nosferatu Zodd - Chapter 1",
    numberOfTheCollection: 2,
    numberTotalCollection: 365,
    image: "https://cdn.readberserk.com/file/AnimeRleases/Berserk_2_001.jpg",
    authors: "Kentaro Miura",
    numberOfPages: 123,
    dateOfUpload: "15/06/2021",
    score: "4/5",
    idUser: "60ce27426afbce2dc8bf0693",
  },
  {
    title: "Berserk",
    subtitle: "Nosferatu Zodd - Chapter 1",
    numberOfTheCollection: 3,
    numberTotalCollection: 365,
    image: "https://cdn.readberserk.com/file/AnimeRleases/Berserk_3_001.jpg",
    authors: "Kentaro Miura",
    numberOfPages: 126,
    dateOfUpload: "15/06/2021",
    score: "4/5",
    idUser: "60ce27426afbce2dc8bf0693",
  },
  {
    title: "El enigma de la falla de Amigara",
    numberOfTheCollection: 1,
    numberTotalCollection: 1,
    image: "http://revistakokoro.com/junji01.jpg",
    authors: "Junji Ito",
    numberOfPages: 26,
    dateOfUpload: "15/06/2021",
    score: "5/5",
    idUser: "60ce27426afbce2dc8bf0693",
  },
  {
    title: "Uzumaki",
    numberOfTheCollection: 1,
    numberTotalCollection: 3,
    image:
      "https://i.pinimg.com/originals/32/04/e3/3204e3db75b14a580248062611cdcf76.png",
    authors: "Junji Ito",
    numberOfPages: 85,
    dateOfUpload: "15/06/2021",
    score: "5/5",
    idUser: "60ce27426afbce2dc8bf0693",
  },
  {
    title: "Kimetsu No Yaiba",
    subtitle: "Night",
    numberOfTheCollection: 1,
    numberTotalCollection: 23,
    image:
      "https://www.readdemonslayer.xyz/wp-content/uploads/Demon-Slayer-Kimetsu-no-Yaiba-Chapter-1-Cruelty.jpg",
    authors: "Koyoharu Gotōge",
    numberOfPages: 46,
    dateOfUpload: "15/06/2021",
    score: "4/5",
    idUser: "60ce27426afbce2dc8bf0693",
  },
];

//Con el mongoose nos vamos a conectar a la base de datos con la URL, ver si existe, si existe (en el Compass por ejemplo) borrarla y luego crearla:

mongoose
  .connect(DB_URL, { userNewUrlParser: true, userUnifiedTopology: true })
  //Esto hay que copiarlo y pegarlo porque son opciones de mongoose
  .then(async () => {
    console.log("Conectando a la DB desde seed");
    //Encontrar todo lo que hay en la base de datos:
    const allMangas = await Manga.find();
    //Si tiene lenght esque existe y hay que borrarla y si no hay que crearla. Con el drop te la cargas.
    if (allMangas.length) {
      await Manga.collection.drop();
      console.log("Coleccion eliminada de la base de datos");
    }
  })
  .catch((error) => {
    console.log("Error al eliminar la base de datos");
  })
  .then(async () => {
    await Manga.insertMany(mangaSeed);
    console.log("Plantada la semilla");
  })
  .catch((error) => {
    console.log("No se ha podido plantar la semilla");
  })
  .finally(() => mongoose.disconnect());
