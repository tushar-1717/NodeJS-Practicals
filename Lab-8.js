const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {

  fs.readFile('sample.txt', function (err, data) {
    if(err) {
      res.writeHead(404, { 'Content-Type' : 'txt/plain' });
      res.write('File Not Found');
      return res.end();
    }

    res.writeHead(200, { 'Content-Type' : 'txt/plain' });
    res.write(data);
    res.end();
    res.end();
  });

}).listen(3000);

console.log("Server running at http://localhost:3000");