const express = require("express");
const User = require("../models/users.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
