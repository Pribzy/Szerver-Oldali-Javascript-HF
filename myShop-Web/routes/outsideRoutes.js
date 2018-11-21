//MW:
const renderMW = require("../middlewares/generic/render");
const checkLoginMW = require("../middlewares/generic/checkLogin");
const logoutMW = require("../middlewares/generic/logout");
const autheticationMW = require("../middlewares/generic/authentication");
const mainRedirectMW = require("../middlewares/generic/mainRedirect.js");

module.exports = function(app) {
  const objectRepository = {};

  app.get("/", mainRedirectMW(objectRepository));

  app.get("/login", renderMW(objectRepository, "login"));

  app.post("/login", checkLoginMW(objectRepository));

  app.get(
    "/logout",
    autheticationMW(objectRepository),
    logoutMW(objectRepository),
    function(req, res, next) {
      res.redirect("/");
    }
  );
};
