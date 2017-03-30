var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde, sauf a Antoine!');
});
server.listen(8080);
