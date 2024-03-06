const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    return res.render('home');
});

router.get('/signup', (req, res) => {
    return res.render('signup');
});

router.get('/login', (req, res) => {
    return res.render('login');
});

router.get('/contact', (req, res) => {
    let message = req.query.message;
    return res.render('contact', {message : message});
});

router.get('/about', (req, res) => {
    return res.render('about');
});

module.exports = router;