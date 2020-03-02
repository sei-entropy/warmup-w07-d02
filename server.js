// // require express
// // const express = require('express')
// // Load the Express module on our server
// const express = require("express");

// // import routers
// // create new express server
// let app = express();

// // ********   Middleware      ******
// // parse JSON request sent by the user
// // and converts it into JS object before
// // a route uses it

// // for this example, we'll use an in-memory array in place of a database
// const books = [
//   { title: "Dictionary", author: "Webster" }, // 0
//   { title: "Encyclopedia", author: "Encarta" }, // 1
//   { title: "Clean Code", author: "Robert Cecil Martin" } // 2
// ];

// // create an Express app object
// app.get("/", function(req, res) {
//   res.send("hi");
// });

// // launch server

// Loading the express module on our server
const express = require("express");

// Creates a new instance of express on our server
const app = express();

app.get("/", function(req, res) {
  res.send("hi");
  // when a request comes in at localhost:3000, it will respond
});

// tells the server where to listen for requests
const port = process.env.PORT || 3000;

app.listen(port, function() {
  // tells the server where to listen for requests on port 3000

  console.log(`hello-express is listening on port ${port}`);
}); // actualizing the line above
const books = [
  { title: "Dictionary", author: "Webster" }, // 0
  { title: "Encyclopedia", author: "Encarta" }, // 1
  { title: "Clean Code", author: "Robert Cecil Martin" } // 2
];

app.use(express.json());

// // GET /books returns all books
app.get("/books", function(req, res) {
  res.json({
    books: books
  });
});
// // GET /books/:id returns single book
app.get("/books/:id", function(req, res) {
  const newbooksID = req.params.id;

  if (!isNaN(newbooksID)) {
    const newbooks = books[newbooksID];
    if (newbooks !== undefined) {
      res.json({ newbooks: newbooks });
    } else {
      res.status(404).json({ error: "books Not Found" });
    }
  } else {
    // invalid ID key
    res.status(406).json({
      error: "InvalidID"
    });
  }
});

app.post("/books", function(req, res) {
  console.log(req.body);

  books.push(req.body.newbooks);

  res.status(201).json({ books: books });
});

// update a newbook
app.put("/books/:id", function(req, res) {
  const newbookId = req.params.id;
  console.log(req.body);
  books[newbookId] = req.body.newbook;
  res.send("Got a PUT request at /user");
});

// delete a newbook
app.delete("/books/:id", function(req, res) {
  const newbookId = req.params.id;
  console.log(req.body);
  books.splice(newbookId, 1);

  res.send("Got a DELETE request at /user");
});
