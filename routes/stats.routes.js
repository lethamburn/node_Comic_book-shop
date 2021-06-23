const express = require("express");
const router = express.Router();
const Comic = require("../models/Comic.model");
const Manga = require("../models/Manga.model");


router.get("/", (req, res, next) => {
  return res.render("stats", { user: req.user });
});

module.exports = router;
  