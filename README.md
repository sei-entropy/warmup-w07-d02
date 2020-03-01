# Express API

## Objectives

By the end of this, developers should be able to:

- Write five CRUD endpoints for a library API resource using Express and Javascript.



## Preparation

1. create a new project with 

```
npm init
```

2. install express
```
npm install express --save
```

3. create a server file and chenge main in package.json to server.js
```
touch server.js
```

4. create a git ignore file and add node_modules into it
```
touch .gitignore
```






Most apps need to do a bit more than always sending back "Hello world". To get
some more exposure to Express, build out a minimal API in
that that we can
use to store books for a library.

Our app will have three routes available:

- `GET /books`: respond with JSON of all books.
- `GET /books/:id`: respond with JSON of one book.
- `POST /books/:id` : creates a new book and responds with a JSON of all books.

- `PUT /books/:id` : to update a a book.
- `DELETE /books/:id`: delete book based on id, then respond with success.  
We can not use the browser URL to test our delete requests so let's use an application [Postman](https://www.getpostman.com/) to do so.

