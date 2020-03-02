

// Loading the express module on our server
const express = require('express');

// Creates a new instance of express on our server
const app = express();




// tells the server where to listen for requests
const port = process.env.PORT || 3000;

app.listen(port, function() {
  // tells the server where to listen for requests on port 3000

  console.log(`hello-express is listening on port ${port}`);
}); // actualizing the line above



const books = [
    { title: 'Dictionary', author: 'Webster' }, // 0
    { title: 'Encyclopedia', author: 'Encarta' }, // 1
    { title: 'Clean Code', author: 'Robert Cecil Martin' } // 2
  ]
  


app.get('/', function(req ,res){
   
    res.send("hello world ")
    
    });


    app.get('/books', function(req,res){


        res.json({
            // key   value 
            books : books
        })
  
  
       })




       app.get('/books/:id', function(req,res){
      
        const bookId = req.params.id;
        const book = people[bookId];

        if (book !== undefined) {
            res.json({ books: books });
          } else {
            res.status(404).json({ error: 'books Not Found'});
          }


       })


       app.post('/books', function(req,res){
      
        books.push(req.body.book)
          res.status(201).json({
            books : books
          })
 
 
        })

        //update person 
        app.put('/books/:id', function(req,res){
      
        const bookId = req.params.id;
        books[bookId] = req.body.book
          res.send("got a put requst ")

        })



         //delete  person 
         app.delete('/books/:id', function(req,res){
      
        const bookId = req.params.id;
        books.splice(bookId ,1)
          res.send("got a delete  requst ")

        })






