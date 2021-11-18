var BookRepository = require('../repository/BookRepository')

exports.get_books = function(req,res){
    var value = new BookRepository()
    res.send(JSON.stringify(value.GetBooks()));

}

exports.get_book = function(req,res){

    var value = new BookRepository()
    var book = value.GetBooksById(1);
    console.log(book);
    var jsonvalue = JSON.stringify(book);
    console.log(jsonvalue);

    res.send(jsonvalue);

}

exports.test = function(req,res){

    res.send(JSON.stringify('Hello'));

}