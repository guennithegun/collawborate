///////////
// IMPORT ALL NECESSARY MODULES
///////////

const http = require('http');

///////////
// SETTING UP NODE SERVER
///////////

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain'});
    response.end('Hello collawborate!');
}).listen(8080);

console.log('Hello, I am the node server and up and running :-)');