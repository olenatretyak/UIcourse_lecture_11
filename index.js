var http = require('http');//http - вбудований модуль nodejs

http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write( (new Date()).toLocaleTimeString() );
  res.end();
}).listen(8080); //порт

console.log('Server running on port 8080');