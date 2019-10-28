// import express from 'express' // ES modules 

const express = require('express') // Common JS modules - equivalent to line above 

const server = express();



// requests/route handlers - when someone requests something from your server (like axios.get() - this is what info user is requesting)
     // HTTP methods - GET, POST, PUT, DELETE
     // / means the root of my site 
server.get('/', (req, res) => {
     res.send('Hello Node 23!');
})      // this handles GET requests to / on localhost:8000 (summary of everything) - sends this string as a response 





// listen for requests in a particular port on local host
const port = 8000;    // this means localhost:8000
// turn on the server
server.listen(port, () => console.log(`it's alive!!!`))