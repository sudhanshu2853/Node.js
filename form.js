// const http= require("http");

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="Name" name="name" />
//         <input type="text" placeholder="Email" name="email" />
//         <button>Submit</button>
//         </form>
//         `);

//     res.end();
// }).listen(3400);

const http = require('http');
const fs = require('fs');
const port = 5200;
const queryString = require('querystring');



http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile('html/form.html', (err, data) => {
            if (err) {
                fs.readFile('html/404.html', (err, data) => {
                    if (err) {
                        res.writeHead(404, { 'Content-Type': 'text/plain' })
                        res.end("Error 404 Page not found!")
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' })
                        res.write(data);
                        res.end();
                    }
                })
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data);
                res.end();
            }
        })
    } else if (req.url === '/submit' && req.method === 'POST') {
        let dataChunks = [];
        req.on("data", (chunks) => {
            dataChunks.push(chunks);
        });
        req.on('end', () => {
            let rawData = Buffer.concat(dataChunks).toString('utf-8');
            let readableData = queryString.parse(rawData);
            console.log(readableData);


            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(`<body bgcolor='#030303'><center>
            <h1 align='center' style='color:white;'>Thank you ${readableData.name || "User"} for contribution.</h1>
            <a href='/'><button style='
            margin-top: 8px;
            padding: 12px;
            border: none;
            border-radius: 8px;
            background-color: #2563eb;
            color: #ffffff;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 4px 6px -1px rgba(42, 45, 51, 0.2);'>Home</button></a>
            </center>
            </body>
            `);
        });

    } else {
        fs.readFile('html/404.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.end("Error 404 Page not found!")
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(data);
                res.end();
            }
        });
    }

}).listen(port, () => {
    console.log(`Server Running on port:${port}\n link:https://localhost:${port}`);
});