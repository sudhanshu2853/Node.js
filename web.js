const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    fs.readFile('html/home.html', 'utf-8', (err, data) => {
        if (err) {
            fs.readFile('html/404.html', 'utf-8', (err, data) => {
                if (err) {
                    res.write("404 page not found");
                    res.end
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                }
            })
            return;
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    })

}).listen(5800);