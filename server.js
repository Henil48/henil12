// Importing the http module
// const http = require('http');

// // Creating the server
// const server = http.createServer((req, res) => {
//   res.write('Hello World!'); // Sending a response
//   res.end(); // Ending the response
// });

// // Server listening on port 3000
// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });


const express = require('express');
const app = express();
    

// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(3000);
// });