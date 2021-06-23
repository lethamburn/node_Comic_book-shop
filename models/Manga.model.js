const mongoose = require("mongoose");

const mangaSchema = new mongoose.Schema(
  {
    title: { type: String },
    subtitle: { type: String },
    numberOfTheCollection: { type: Number },
    numberTotalCollection: { type: Number },
    image: { type: String },
    authors: { type: String },
    numberOfPages: { type: Number },
    score: { type: String },
    dateOfUpload: { type: String },
    idUser: { type: mongoose.Types.ObjectId, ref: "idUser" },
  },
  { timestamps: true }
);

const Manga = mongoose.model("Manga", mangaSchema); //Esta linea apunta a la colección de mongoose con nombre Comics

module.exports = Manga;
