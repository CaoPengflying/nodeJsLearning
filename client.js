var http = require('http');

var options = {
  host: 'localhost',
  port: '8080',
  path: '/index1.html'
};

var callback = function(response){
  var body = '';
  response.on('data',function(data){
     body += data;
 });
 
 response.on('end',function(){
   console.log(nody);
 });
}

var req = http.request(options,callback);
req.end();