// Loading the express module on our server
const express = require("express");

// Creates a new instance of express on our server
const app = express();

// ********   Middleware      ******
// parse JSON request sent by the user
// and converts it into JS object before
// a route uses it
app.use(express.json());


app.get('/', function(req, res) { 
  // when a request comes in at localhost:3000, it will respond 
  res.send("Hello");
});


const books = [
  { title: "Dictionary", author: "Webster" }, // 0
  { title: "Encyclopedia", author: "Encarta" }, // 1
  { title: "Clean Code", author: "Robert Cecil Martin" } // 2
];

// for calling the API
app.get("/api/library", function(req, res) {
  res.json({
    library: books
  });
});

app.get('/api/library/:id' , function (req , res) { 
    const bookID = req.params.id
     const book = books[bookID]; 
     console.log(book);
    res.json({ 
        library: book, 
    }); 
    });

app.post("/api/library", function(req, res) {
  books.push(req.body.book);
  res.status(201).json({
    books: books
  });
});

//delete  person
app.delete("/api/library/:id", function(req, res) {
  const bookId = req.params.id;
  books.splice(bookId, 1);
  res.send("got a delete  requst ");
});

// update person
app.put('/api/library/:id', function(req, res){
    const bookID = req.params.id;
    books[bookID] = req.body.book;
    res.json({
        books: books,
    })
});


// tells the server where to listen for requests
const port = process.env.PORT || 3000;

app.listen(port, function() {
  // tells the server where to listen for requests on port 3000

  console.log(`hello-express is listening on port ${port}`);
}); // actualizing the line above
