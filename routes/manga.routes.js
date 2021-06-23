const express = require("express");
const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/file.middleware");
const Manga = require("../models/Manga.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const userlog = req.user;
    const mangas = await Manga.find({
      idUser: userlog._id,
    });
    console.log(mangas);
    return res.status(200).render("mangas", {
      title: "Manga",
      arrayMangas: mangas,
      user: req.user,
    });
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let response = "";

    const deleted = await Manga.findByIdAndDelete(id);
    if (deleted) response = "Manga deleted from db";
    else response = "Can't find a manga with this id. ¿Are you sure?";

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/add-manga",
  [upload.single("image"), uploadToCloudinary],
  async (req, res, next) => {
    try {
      const idUser = req.user._id;
      console.log(req.body);
      const {
        title,
        subtitle,
        numberOfTheCollection,
        numberTotalCollection,
        authors,
        numberOfPages,
        score,
        dateOfUpload,
      } = req.body;
      const image = req.fileUrl ? req.fileUrl : "";
      const newManga = new Manga({
        title,
        subtitle,
        numberOfTheCollection,
        numberTotalCollection,
        authors,
        numberOfPages,
        score,
        dateOfUpload,
        image,
        idUser,
      });
      const createdManga = await newManga.save();

      return res.redirect("/mangas");
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = router;
