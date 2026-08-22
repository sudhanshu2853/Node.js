const http = require('http');

http.createServer((req, res) => {

    res.write('<h1 align="center">Welcome</h1>');
    res.end("Hello User! \n How are You?")
}).listen(4800);