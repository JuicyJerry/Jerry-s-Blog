const dotenv = require("dotenv");
dotenv.config();

const username = encodeURIComponent(process.env.MONGO_USERNAME);
const password = encodeURIComponent(process.env.MONGO_PASSWORD);
// const password = process.env.MONGO_PASSWORD

console.log("config, username ====> ", username);
console.log("config, password ====> ", password);

module.exports = {
  MONGO_URI: `mongodb+srv://${username}:${password}@cluster0.l7dbshf.mongodb.net/?retryWrites=true&w=majority`,
  //   MONGO_URI: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.l7dbshf.mongodb.net/?retryWrites=true&w=majority`,
  PORT: process.env.PORT || 8080,
};
