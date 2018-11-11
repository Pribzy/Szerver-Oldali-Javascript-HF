//MW:
const renderMW = require("../middlewares/generic/render");
const checkLoginMW = require("../middlewares/generic/checkLogin");
const loginErrorMW = require("../middlewares/generic/loginError");
const logoutMW = require("../middlewares/generic/logout");
const autheticationMW = require("../middlewares/generic/authentication");

module.exports = function(app) {
  const objectRepository = {};

  app.get(
    "/",
    loginErrorMW(objectRepository),
    renderMW(objectRepository, "login")
  );

  app.get(
    "/logout",
    autheticationMW(objectRepository),
    logoutMW(objectRepository)
  );

  app.post("/login", checkLoginMW(objectRepository));
};
