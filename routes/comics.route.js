const express = require("express");
const Comic = require("../models/comics.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const comics = await Comic.find();
    return res.status(200).render("comics", {
      title: "Comics",
      arrayComics: comics,
    });
  } catch (error) {
    return next(error);
  }
});

router.post("/add-comic", async (req, res, next) => {
  try {
    const {
      title,
      subtitle,
      numberOfTheCollection,
      numberTotalCollection,
      image,
      authors,
      numberOfPages,
      score,
      dateOfUpload,
    } = req.body;

    const newComic = new Comic({
      title,
      subtitle,
      numberOfTheCollection,
      numberTotalCollection,
      image,
      authors,
      numberOfPages,
      score,
      dateOfUpload,
    });

    await newComic.save();
    return res.status(201).redirect("/comics");
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
