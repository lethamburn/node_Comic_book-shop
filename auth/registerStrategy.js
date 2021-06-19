const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/User.model');
const { isValidPassword, isValidEmail } = require('./utils');

const registerStrategy = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    async (req, email, password, done) => {
        try {
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                const error = new Error('The user already exists');
                error.status = 400;
                return done(error);
            };

            if (!isValidEmail(email)) {
                const error = new Error('Not valid e-mail');
                error.status = 400;
                return done(error);
            };

            if (!isValidPassword(password)) {
                const error = new Error('The password has to be 8 characters long, one uppercase letter and one lowercase letter');
                error.status = 400;
                return done(error);
            };

            const saltRounds = 10;
            const hash = await bcrypt.hash(password, saltRounds);

            const newUser = new User({
                email,
                password: hash,
                name: req.body.name
            });

            const user = await newUser.save();

            console.log(user);

            user.password = null;
            return done(null, user);
        } catch (error) {
            return done(error);
        } 
    }
);

module.exports = registerStrategy;