var mongoose = require("mongoose");

var student = mongoose.Schema({
  name: "string",
  address: "string",
  age: "number",
});
var Student = mongoose.model("Schema", student);
var newStudent = new Student({
  name: "Hong Gil Dong",
  address: "서울시 강남구 논현동",
  age: "22",
});
newStudent
  .save()
  .then(() => {
    console.log("Saved!");
  })
  .catch((error) => {
    console.log(error);
  });
