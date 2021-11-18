var BookRepository = require('../repository/BookRepository')

var value = new BookRepository()


exports.get_books = function(req,res){

    res.send(JSON.stringify(value.GetBooks()))

}