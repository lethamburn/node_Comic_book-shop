const express = require('express');
const { upload, uploadToCloudinary } = require('../middlewares/file.middleware');
const Comic = require('../models/Comic.model');

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
/* 
router.get('/create', (req, res, next) => {
    return res.render('create-comic');
}) */

router.post('/add-comic', [upload.single('image'), uploadToCloudinary],async (req, res, next) => {
    try {
        console.log(req.body);
        const {title,
            subtitle,
            numberOfTheCollection,
            numberTotalCollection,
            authors,
            numberOfPages,
            score,
            dateOfUpload} = req.body;
        const image = req.fileUrl ? req.fileUrl : '';
        const newComic = new Comic({title,
            subtitle,
            numberOfTheCollection,
            numberTotalCollection,
            authors,
            numberOfPages,
            score,
            dateOfUpload, image});
        const createdComic = await newComic.save();

        return res.redirect('/comics');
    } catch (error) {
        return next(error);
    }
});

module.exports = router;