// Load the Express module on our server
const express = require('express');

// create new express server
let app = express();


// ********   Middleware      ******
// parse JSON request sent by the user
// and converts it into JS object before
// a route uses it
app.use(express.json());




// Tells the server where to listen for requests
const port = 3000;



// tells the server where to listen for requests
app.listen(port, function() {
    console.log(`hello-express is listening on port ${port}`);
});

