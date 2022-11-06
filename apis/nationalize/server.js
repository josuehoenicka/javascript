const http = require("http");

function website(req, res) {
    res.writeHead(200, {"Content-type": "text/plain"})
    res.end("My first server :)")
}

let server = createServer();

server.listen(6969, "127.0.0.1");

console.log("Server in 6969 port");