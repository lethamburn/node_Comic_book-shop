const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subtitle: { type: String, required: false },
    numberOfTheCollection: { type: Number, required: true },
    numberTotalCollection: { type: Number, required: true },
    image: { type: String, required: true },
    authors: { type: String, required: true },
    numberOfPages: { type: Number, required: true },
    opinion: { type: String, required: false },
    dateOfUpload: { type: String, required: true },
  },
  { timestamps: true }
);

const Comic = mongoose.model("Comics", comicSchema); //Esta linea apunta a la colección de mongoose con nombre Comics

module.exports = Comic;
