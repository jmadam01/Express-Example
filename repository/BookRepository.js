const Book = require('../models/Book');

const sqlite = require('sqlite3').verbose();

class InfromationRepository{

    
    constructor(db){

        this.db = db

    }
    // BookExists(id){


    //     let db = new sqlite.Database('./data/Information.db',sqlite.OPEN_READWRITE, (err) => {
 
    //          if (err) {
         
    //              console.error(err.message + err.Database, + err.sqlite);
    //          }
         
    //          console.log('Connection to Database succesful!');
             
    //      });
 
 
    //      db.serialize(()=>{
 
 
    //          db.each('SELECT bookName as name FROM Book', (err,row)=>{
         
    //              if(err){
         
    //                  return console.error(err.message + err.Database, + err.sqlite);
         
    //              }
                 
    //              console.log(row.name );
         
    //          })
         
    //      });
 
    //      db.close((err) => {
 
    //          if (err) {
    //              console.error(err.message);
    //          }
    //          console.log('Database connection closed!');
 
    //      });
 
    //  }
    // 
    GetBooksById(id){


        let db = new sqlite.Database('./data/Information.db',sqlite.OPEN_READWRITE, (err) => {
 
             if (err) {
         
                 console.error(err.message + err.Database, + err.sqlite);
             }
         
             console.log('Connection to Database succesful!');
             
         });
 
 
         db.serialize(()=>{
 
 
             db.each('SELECT bookName as name, bookId as id, bookSummary as summary, bookPublisher as publisher, bookAuthor as author FROM Book WHERE bookID = ' + id, (err,row)=>{
         
                 if(err){
         
                     return console.error(err.message + err.Database, + err.sqlite);
         
                 }
                 
                 return new Book(row.id, row.name, row.author,row.publisher,row.summary);
         
             })
         
         });
 
         db.close((err) => {
 
             if (err) {
                 console.error(err.message);
             }
             console.log('Database connection closed!');
 
         });
 
     }


    GetBooks(){

       let books = new Array();


       let db = new sqlite.Database('./data/Information.db',sqlite.OPEN_READWRITE, (err) => {

            if (err) {
        
                console.error(err.message + err.Database, + err.sqlite);
            }
        
            console.log('Connection to Database succesful!');
            
        });


        db.serialize(()=>{


            db.each('SELECT bookName as name, bookId as id, bookSummary as summary, bookPublisher as publisher, bookAuthor as author FROM Book', (err,row)=>{
        
                if(err){
        
                    return console.error(err.message + err.Database, + err.sqlite);
        
                }
                
                books.push(new Book(row.id, row.name, row.author,row.publisher,row.summary));
        
            })
        
        });

        db.close((err) => {

            if (err) {
                console.error(err.message);
            }
            console.log('Database connection closed!');

        });


        return books;
    }


}

module.exports = InfromationRepository;
