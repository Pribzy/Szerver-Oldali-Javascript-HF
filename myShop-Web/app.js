var express = require("express");
var app = express();

//TODO: Átirányítani a 'views'-ra

var session = require("express-session");
var bodyParser = require("body-parser");

app.use(express.static("public"));

app.set("view engine", "ejs");

/**
 * Session above all
 */
app.use(
  session({
    secret: "keyboard cat",
    cookie: {
      maxAge: 60000
    },
    resave: true,
    saveUninitialized: false
  })
);

/**
 * Parse parameters in POST
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

/**
 * Let's creat the .tpl and .error on the res object
 */
app.use(function(req, res, next) {
  res.tpl = {};
  res.tpl.error = [];

  return next();
});

/**
 * Standard error handler
 */
app.use(function(err, req, res, next) {
  res.status(500).send("Houston, we have a problem!");

  //Flush out the stack to the console
  console.error(err.stack);
});

/** Routes */
require("./routes/productRoutes.js")(app);
require("./routes/storeRoutes.js")(app);
require("./routes/outsideRoutes.js")(app);

var server = app.listen(3000, function() {
  console.log("Server On: 3000");
});
