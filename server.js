// require express
const express = require('express')

// for this example, we'll use an in-memory array in place of a database
const books = [
    { title: 'Dictionary', author: 'Webster' }, // 0
    { title: 'Encyclopedia', author: 'Encarta' }, // 1
    { title: 'Clean Code', author: 'Robert Cecil Martin' } // 2
  ]

  
  
  // create an Express app object
  const app = express();

  // create an book
  app.post('/api/books', function(req, res) {
    books.push(req.body.books)
    res.send(req.body);
    res.status(201).json({
        books: books,
    })
 });




  // GET /books returns all books
  app.get('/api/books',function(req,res){
    res.json({
        books:books
    })
})
  


  // GET /books/:id returns single book
  app.get('/api/books/:id',function(req,res){
    const booksId=req.params.id
    const boo = books[booksId]

    if(boo !== undefined){
        res.status(200).json({
            boo:boo
        })
    }else{
      res.status(406).json({
          error:"invalidID"
      })
    }
 })



  // DELETE /books/:id deletes a book
  app.delete('/books/:id', function(req, res) {
    const bookID = req.params.id;
    books.splice( bookID, 1);
    res.send('Delete a book');
 }); 






  // launch server

// tells the server where to listen for requests
const port = process.env.PORT || 3000;

app.listen(port, function() {
  // tells the server where to listen for requests on port 3000

  console.log(`hello-express is listening on port ${port}`);
}); // actualizing the line above
