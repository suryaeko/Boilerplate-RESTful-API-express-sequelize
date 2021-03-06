// This will be our application entry. We'll setup our bin here.
const http = require("http");
const app = require("../index"); // The express app we just created

const port = parseInt(process.env.PORT, 10) || 8000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
console.log("listening on port: " + port);
