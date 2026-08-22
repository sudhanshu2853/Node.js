const http = require('http');
const colors = require('colors');


const users = [
    {
        name: "Sudhanshu",
        age: 22,
        email: "abc@gmail.com"
    },
    {
        name: "Ravi",
        age: 22,
        email: "abc@gmail.com"
    },
    {
        name: "Kisan",
        age: 22,
        email: "abc@gmail.com"
    }
]

http.createServer((req, res) => {
    res.setHeader("Content-type", "application/json");
    res.write(JSON.stringify(users));
    res.end();

}).listen(4500, () => {
    console.log('server is running on port 4500 link: http://localhost:4500'.green.bgBlue);
})