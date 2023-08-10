const http = require("http");
const config = require("./config/index");
var mongoose = require("mongoose");

const hostname = "127.0.0.1";

const { MONGO_URI, PORT } = config;

let mongo_url = "";
let port = "";
if (process.env.NODE_ENV === "production") {
  console.log("check ==> pro mode");
  mongo_url = process.env.MONGO_URI;
  port = process.env.PORT;
} else {
  console.log("check ==> dev mode");
  port = PORT;
  mongo_url = MONGO_URI;
}

console.log("index.js ==> ", mongo_url);
// var db = mongoose.connection;
const connect = mongoose
  .connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("error!!!!!!!!", err));

// mongoose
//   .connect(mongo_url)
//   .then("error", function (e) {
//     console.log(e, "< === Connection Failed!");
//   })
//   .catch("open", function () {
//     console.log("Connected!");
//   });

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
