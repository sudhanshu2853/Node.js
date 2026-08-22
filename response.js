const http = require('http');

const name="Sudhanshu";

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html");
    res.write(`
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sudhanshu Server</title>
    <link type="image/png" sizes="16x16" rel="icon" href="favicon.png">
    <style>
      h1 {
        text-align: center;
      }
        body{
            background-color: #000000;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            color: #15ff00;
        }
    </style>
  </head> 
  <body>
    <h1>Welcome to Server version 3.0</h1>  
    <h2> Hello ${name}</h2>
    <h3>Date: ${new Date().toLocaleDateString}</h3>
    <h3 style="color: #30fdde;">Time: ${new Date().toLocaleTimeString()}</h3>
    <h3>What are you doing ${name}?</h3> 
  </body>
</html>
    `);
    res.end();
    // process.exit();
});
server.listen(3300,()=>{
    console.log("Server is running on port 3300 link: http://localhost:3300");
});