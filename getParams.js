var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  
  var params = url.parse(req.url,true).query;
  res.write("网站名:"+params.name);
  res.write("/n");
  res.write("网站url:"+params.url);
  res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);