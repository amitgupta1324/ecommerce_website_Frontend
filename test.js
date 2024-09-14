// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
  // Send the response body
res.end('Hello, World!\n');
});

// Listen on the specified hostname and port
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
