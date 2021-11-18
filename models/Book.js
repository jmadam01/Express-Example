const BookDto = require('../dtos/BookDto');
const sqlite = require('sqlite3');
class Book{

    constructor(bookID, bookName,bookAuthor, bookPublisher,bookSummary){

        this._bookID = bookID,
        this._bookName = bookName,
        this._bookAuthor = bookAuthor,
        this._bookPublisher = bookPublisher,
        this._bookSummary = bookSummary

    }


    ConvertToDto(){

        return new BookDto(this._bookName,this._bookAuthor,this._bookPublisher,this._bookSummary);

    }

 

}

module.exports = Book;
