'use strict';
var express = require('express');
var router = express.Router();

router.get('/api/book', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;