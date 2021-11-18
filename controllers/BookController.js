const BookRepository = require('../repository/BookRepository');
const Book = require('../models/Book');
const sqlite = require('sqlite3');

exports.get_books = function(req,res){

    let db = new sqlite.Database('./data/Information.db',sqlite.OPEN_READWRITE, (err) => {

        if (err) {
    
            console.error(err.message + err.Database, + err.sqlite);
        }
    
        console.log("Connection to database was succesful!")
       
       });
        
       db.serialize(()=>{
    
    
           db.each('SELECT bookName as name, bookId as id, bookSummary as summary, bookPublisher as publisher, bookAuthor as author FROM Book' , (err,row)=>{
       
               if(err){
       
                   return console.error(err.message + err.Database, + err.sqlite);
    
               }
               var nbook = new Book(row.id, row.name, row.author,row.publisher,row.summary)
               res.send(JSON.stringify(nbook));
           })
         
       });
    
       db.close((err) => {
    
           if (err) {
               console.error(err.message);
           }
           console.log('Database connection closed!');
      
       });

}

exports.get_book = function(req,res){

    var value = new Book();
    
    var book = value.GetBooksById(1)

    res.send(book);

}

exports.get_book_test = function(req,res){

    var value =new BookRepository();

    res.send(value.TestBook())

}

exports.test = function(req,res){

    res.send(JSON.stringify('Hello'));

}


