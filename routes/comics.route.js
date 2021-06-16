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

module.exports = router;
