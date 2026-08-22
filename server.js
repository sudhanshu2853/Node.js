const http = require('http');

http.createServer((req, res) => {
   res.write('<h1 align="center">Welcome to Server version 1.0</h1>');
    
    res.end("Hello User! \n How are You?")
}).listen(3000);


http.createServer((req, res) => {
    res.write('<h1 align="center">Welcome to Server version 2.0</h1>');
    res.end();
}).listen(3200);