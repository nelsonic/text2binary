var port = process.env.PORT || 5000;
var fs = require('fs');
var index = fs.readFileSync(__dirname+'/index.html');
require('http').createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(port);
console.log(">listening http://127.0.0.1:"+port);
