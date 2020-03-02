// require express
const express = require('express');

// for this example, we'll use an in-memory array in place of a database
const books = [
    { title: 'Dictionary', author: 'Webster' }, // 0
    { title: 'Encyclopedia', author: 'Encarta' }, // 1
    { title: 'Clean Code', author: 'Robert Cecil Martin' } // 2
  ];
  
  // create an Express app object
const app =  express();
app.use(express.json());
  
  // GET /books returns all books

app.get('/books', function(req, res) {
   res.json({books});
});
// GET /books/:id returns single book

app.get('/books/:id', function(req, res) {
    res.json({book: books[req.params.id]});
});

app.post('/books', function(req, res) {
   const newBook = {title: req.body.title, author: req.body.author};
   books.push(newBook);
   res.status(201).json({
       books
   });
});

app.put('/books/:id', function(req, res) {
    books[req.params.id] = req.body;
    res.send('Book updated with id ' + req.params.id);
});

// DELETE /books/:id deletes a book

app.delete('/books/:id', function(req, res) {
    books.splice(req.params.id, 1);
    res.send('Deleted a book of id ' + req.params.id);
});
  

// some comment
  // launch server
// tells the server where to listen for requests
const port = process.env.PORT || 3000;

app.listen(port, function() {
});