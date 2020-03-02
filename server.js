const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const books = [
    { title: "Dictionary", author: "Webster" }, // 0
    { title: "Encyclopedia", author: "Encarta" }, // 1
    { title: "Clean Code", author: "Robert Cecil Martin" } // 2
];

app.use(express.json());

app.get("/books", (req, res) => {
    res.send(books);
});

app.get("/books/:id", (req, res) => {
    const id = req.params.id;
    const book = books[id];

    res.send(book);
});

app.post("/books/:id", (req, res) => {
    const id = req.params.id;
    books[id] = req.body.book;

    res.send(books);
});

app.delete("/books/:id", (req, res) => {
    const id = req.params.id;
    books.splice(id, 1);

    res.send(books);
});

app.put("/books/:id", (req, res) => {
    const id = req.params.id;
    const book = req.body.book;
    books.splice(id, 1, book);

    res.send(books);
});

app.listen(port, () => console.log("Hello"));
