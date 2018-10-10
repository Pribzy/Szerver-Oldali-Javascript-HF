var express = require("express");
var app = express();

app.use(express.static("static"));

require("../routes/productRoutes.js")(app);
require("../routes/storeRoutes.js")(app);
require("../routes/outsideRoutes.js")(app);

var server = app.listen(3000, function() {
  console.log("Server On: 3000");
});
