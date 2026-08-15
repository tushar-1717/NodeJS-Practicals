const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    console.log("Request received");

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Node.js Application is Running...");
    res.end();
});

// Port number
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log("Server started at http://localhost:3000");
});

// Handle restart signal
process.on('SIGINT', () => {
    console.log("\nApplication stopped. Restart the server...");
    process.exit();
});
