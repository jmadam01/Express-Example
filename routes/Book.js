var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/BookController')

router.get('/', book_controller.get_books);

router.get('/:id',book_controller.get_book)

router.get('/test', book_controller.get_book_test);

module.exports = router;