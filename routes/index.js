const express = require('express');
const csrf = require('csurf');

const router = express.Router();

const csrfProtection = csrf({cookie: true});

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/explore', (req, res) => {
    res.render('explore');
})

router.get('/upload', (req, res) => {
    // res.render('upload', {csrfToken: req.csrfToken()})
    res.send('upload');
});

router.get('/search', (req, res) => {
    // const { search } = req.query;
    res.render('search-results', { search: req.query, test: "THIS IS A TEST" });
});

module.exports = router