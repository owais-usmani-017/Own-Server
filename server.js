const http= require("http");
const fs = require ("fs");
const path = require("path");

const port = 8087;

const server = http.createServer((req,res) =>{
    const filePath = path.join(__dirname , req.url ==='/' ? "index.html" : "req.url");

    const extName = string(path.extname(filePath).toLowerCase());

    const mimeTypes = {
        '.html' : 'text/html',
        '.css' : 'text/css',
        '.js' : 'text/javascript',
        '.png' : 'text/png',
    }
});

server.listen(port , () => {
    console.log("server is running on port " + port)
})