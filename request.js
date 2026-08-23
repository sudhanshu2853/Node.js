const http = require('http');


http.createServer((req, res) => {
    console.log('Request received', req.url);
    if(req.url =="/"){
        res.write(`<h1 style="color: blue; text-align: center;">Home Page</h1>`);
         res.end();
    } else if(req.url == "/about"){
        res.write(`<h1 style="color: green; text-align: center;">About Page</h1>`);
         res.end();
    }else{
        res.write("Page Not Found");
        res.end();
    }
    
   
}).listen(9800, () => {
    console.log('Server is running on port 9800');
});