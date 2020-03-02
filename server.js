const express = require("express");
 let app = express();
  app.use(express.json());
  //  const port = 3000;
const books = [
  { title: "Dictionary", author: "Webster" }, // 0
  { title: "Encyclopedia", author: "Encarta" }, // 1
  { title: "Clean Code", author: "Robert Cecil Martin" } // 2
];
app.put("/api/book/:id", function(req, res) {
  const bookId = req.params.id;
  console.log(req.body);
  books[bookId] = req.body.book;
  res.send("Got a PUT request at /book");
});
app.get("/api/book", function(req, res) {
  res.json({
    books: books
  });
});
app.get("/api/book/:id", function(req, res) {
  const booksID = req.params.id;
  if (!isNaN(booksID)) {
  const book = books[booksID];
  if (book !== undefined) {
    res.json({ book: book });
  } else {
    res.status(404).json({ error: "books Not Found" });
  }
}else {
    // invalid ID key
    res.status(406).json({
      error: "InvalidID"
    });
  }
});
app.post("/api/book", function(req, res) {
  console.log(req.body);
  books.push(req.body);
  res.status(201).json({ books: books });
});
app.delete("/api/book/:id",function(req, res) {
  const BookId = req.params.id;
  console.log(req.body);
  books.splice(BookId, 1);
  res.send("Got a DELETE request at /user");
});
const port = process.env.PORT || 3000;
app.listen(port, function() {
  // tells the server where to listen for requests on port 3000
  console.log(`hello-express is listening on port ${port}`);
});