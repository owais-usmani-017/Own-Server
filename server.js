const http= require("http");
const fs = require ("fs");
const path = require("path");

const port = 8087;

const server = http.createServer();

server.listen(port , () => {
    console.log("server is running on port " + port)
})