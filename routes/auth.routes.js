const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/register', (req, res, next) => {
    return res.render('register');
});

router.post('/register', (req, res, next) => {
    const { email, name, password } = req.body;

    if (!email || !name|| !password) {
        const error = 'Fill all the fields'
        return res.render('register', { error });
    }

    const done = (error, user) => {

        if (error) {
            return next(error);
        }

        req.logIn(user, (error) => {
            if (error) {
                return next(error);
            }
            return res.redirect('/');
        });
    };

    passport.authenticate('register', done)(req);
});

router.get('/login', (req, res, next) => {
    return res.render('login');
});

router.post('/login', (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
        const error = 'Fill all the fields'
        return res.render('register', { error });
    }

    const done = (error, user) => {
        if (error) return next(error);

        req.logIn(user, (error, user) => {
            if (error) {
                return next(error);
            };

            return res.redirect('/');
        });
    };

    passport.authenticate('login', done)(req);
});

router.post('/logout', (req, res, next) => {
    if (req.user) {
        req.logout();
        
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            return res.redirect('/');
        });
    } else {
        return res.status(200).json('No user found');
    }

});

module.exports = router;