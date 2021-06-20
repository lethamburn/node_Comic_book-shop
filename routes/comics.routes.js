const express = require("express");
const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/file.middleware");
const Comic = require("../models/Comic.model");
const User = require("../models/User.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const userlog = req.user;
    const comics = await Comic.find({
      idUser: userlog._id,
    });
    console.log(comics);
    return res.status(200).render("comics", {
      title: "Comics",
      arrayComics: comics,
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

    const deleted = await Comic.findByIdAndDelete(id);
    if (deleted) response = "Comic deleted from db";
    else response = "Can't find a comic with this id. ¿Are you sure?";

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/add-comic",
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
      const newComic = new Comic({
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
      const createdComic = await newComic.save();

      return res.redirect("/comics");
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = router;
