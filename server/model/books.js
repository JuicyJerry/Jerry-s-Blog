var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var BookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Book", BookSchema);
// newStudent
//   .save()
//   .then(() => {
//     console.log("Saved!");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
