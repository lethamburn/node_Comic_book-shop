const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema(
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

const Comic = mongoose.model("Comics", comicSchema); //Esta linea apunta a la colección de mongoose con nombre Comics

module.exports = Comic;
