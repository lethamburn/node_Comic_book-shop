const express = require("express");
const router = express.Router();
const Comic = require("../models/Comic.model");
const Manga = require("../models/Manga.model");
const total = 0;

router.get("/", async(req, res, next) => {

  const userlog = req.user;
  const comics = await Comic.find({
    idUser: userlog._id,
  });
  const mangas = await Manga.find({
    idUser: userlog._id,
  });

  return res.status(200).render("stats", {
    user: req.user,
    arrayComics: comics,
    arrayMangas: mangas,
  });
});
module.exports = router;