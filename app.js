let http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type' : 'text/tml'});
    res.end('Hello Nodejs');
}).listen(8080);

// the code runs in http://127.0.0.1:8080/