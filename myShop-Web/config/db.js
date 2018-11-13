var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/mjqef1",
  { useNewUrlParser: true }
);

module.exports = mongoose;
