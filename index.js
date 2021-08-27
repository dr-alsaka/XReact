const http = require('http');
const fs = require('fs');
const mongo = require('mongodb');
http.createServer((req, res) => {
  fs.readFile('files/'+req.url,(err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(80);