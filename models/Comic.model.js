const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: false },
    numberOfTheCollection: { type: Number, required: true },
    numberTotalCollection: { type: Number, required: true },
    image: { type: String },
    authors: { type: String, required: true },
    numberOfPages: { type: Number, required: true },
    score: { type: String, required: false },
    dateOfUpload: { type: String, required: true },
    idUser: { type: mongoose.Types.ObjectId, ref: "idUser" },
  },
  { timestamps: true }
);

const Comic = mongoose.model("Comics", comicSchema); //Esta linea apunta a la colección de mongoose con nombre Comics

module.exports = Comic;