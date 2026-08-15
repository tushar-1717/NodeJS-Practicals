const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    console.log("Request received from browser");

    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // JavaScript execution on server
    let message = "Hello! JavaScript is executed on Node.js Server.";

    // Send response to browser
    res.write("<h1>Node.js Web Server</h1>");
    res.write("<p>" + message + "</p>");
    res.end();

});
// Server port
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log("Server is running at http://localhost:3000");
});

