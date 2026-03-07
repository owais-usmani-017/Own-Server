const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8087;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

  const extName = path.extname(filePath).toLowerCase();

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpg",
  };

  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(path.join(__dirname, "404.html"), (err, data) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data, "utf8");
        });
      } else {
        res.writeHead(500);
        res.end("Server Error");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
