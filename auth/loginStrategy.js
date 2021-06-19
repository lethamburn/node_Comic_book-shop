const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/User.model");

const loginStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  },
  async (req, email, password, done) => {
    try {
      let existingUser = await User.findOne({ email });

      if (!existingUser) {
        const error = new Error("The user doesnt exists");
        error.status = 401;
        return done(error, null);
      }

      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isValidPassword) {
        const error = new Error("Not valid password");
        return done(error, null);
      }

      existingUser.password = null;
      return done(null, existingUser);
    } catch (error) {
      console.log("Passport.js failed", error);
      return done(error, null);
    }
  }
);

const registerStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  },

  async (req, email, password, done) => {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        const error = new Error("The user already exists");
        return done(error, null);
      }

      if (!isValidEmail(email)) {
        const error = new Error("Not valid e-mail");
        return done(error, null);
      }

      if (!isValidPassword(password)) {
        const error = new Error("Not valid password");
        return done(error, null);
      }

      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);

      const newUser = new User({
        email: email,
        password: passwordHash,
        name: req.body.name,
        lastName: req.body.lastName,
        username: req.body.username,
      });

      const savedUser = await newUser.save();

      savedUser.password = null;
      return done(null, savedUser);
    } catch (error) {
      return done(error, null);
    }
  }
);

module.exports = loginStrategy;
