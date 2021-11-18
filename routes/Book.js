'use strict';
var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/BookController')

router.get('/', book_controller.get_books);

router.get('/bookid',book_controller.get_book)

router.get('/test', book_controller.test);

module.exports = router;