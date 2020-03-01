// Load the Express module on our server
const express = require('express');

// create new express server
let app = express();


// ********   Middleware      ******
// parse JSON request sent by the user
app.use(express.json());




const books = [
    { title: 'Dictionary', author: 'Webster' }, // 0
    { title: 'Encyclopedia', author: 'Encarta' }, // 1
    { title: 'Clean Code', author: 'Robert Cecil Martin' } // 2
]

// all books
// http://localhost:3000/api/books
app.get('/api/books', function (req, res) {
    res.json({
        books: books
    });
});


// Get book by Record ID
// http://localhost:3000/api/books/2
app.get('/api/books/:id', function (req, res) {
    const bookID = req.params.id;

    if (!isNaN(bookID)) {

        const book = books[bookID];
        if (book !== undefined) {
            res.json({ book: book });
        } else {
            res.status(404).json({ error: 'book Not Found' });
        }
    } else {
        // invalid ID key
        res.status(406).json({
            error: 'InvalidID'
        })
    }

});



// create a book
/* {
	"book":{
        "title": "newbook",
        "author": "cause book"
	}
 } */
app.post('/api/books', function (req, res) {
    console.log(req.body);

    books.push(req.body.book)

    res.status(201).json({ books: books })
})



// update a book
/* {
	"book":{
        "title": "updated",
        "author": "cause book"
	}
 } */
app.put('/api/books/:id', function (req, res) {
    const bookId = req.params.id;
    console.log(req.body);
    books[bookId] = req.body.book
    res.send('Got a PUT request')
})


// delete a book
app.delete('/api/books/:id', function (req, res) {
    const bookId = req.params.id;
    console.log(req.body);
    books.splice(bookId, 1)

    res.send('Got a DELETE request at /user')
})



// Tells the server where to listen for requests
const port = 3000;



// tells the server where to listen for requests
app.listen(port, function () {
    console.log(`listening on port ${port}`);
});

