var http= require('http');
http.createServer(function (req,res){
res.writehead(200,{'content-Type':'text/plain'});
res.end('hello World');
}).listen(8001,'127.0.0.1');


console.log('Server Running at http.');