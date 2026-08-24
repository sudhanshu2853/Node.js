const http=require('http');
const arg=process.argv;
console.log(arg[1]);

http.createServer((req,res)=>{
    res.write("Testing the server");
    res.end();
}).listen(arg[2]);