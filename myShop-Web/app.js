var express = require("express");
var app = express();

//TODO: Átirányítani a 'views'-ra

app.use(express.static("public"));

app.set("view engine", "ejs");

require("../routes/productRoutes.js")(app);
require("../routes/storeRoutes.js")(app);
require("../routes/outsideRoutes.js")(app);

var server = app.listen(3000, function() {
  console.log("Server On: 3000");
});
