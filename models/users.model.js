const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    adress: { type: String, required: true },
    location: { type: String, required: true },
    country: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema); //Esta linea apunta a la colección de mongoose con nombre Comics

module.exports = User;
