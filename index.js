const http = require('http');
const fs = require('fs');
const mongo = require('mongodb');
http.createServer((req, res) => {
  fs.readFile('fiels/'+req.url,(err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(80);
