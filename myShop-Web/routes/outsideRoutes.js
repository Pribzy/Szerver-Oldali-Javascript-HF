//MW:
const renderMW = require("../middlewares/generic/render");
const checkLoginMW = require("../middlewares/generic/checkLogin");
const loginErrorMW = require("../middlewares/generic/loginError");
const logoutMW = require("../middlewares/generic/logout");
const autheticationMW = require("../middlewares/generic/authentication");

module.exports = function(app) {
  const objectRepository = {};

    app.GET('/',
    loginErrorMW(objectRepository),
    renderMW(objectRepository,"index.html")
    );

    app.GET('/logout',
    autheticationMW(objectRepository),
    logoutMW(objectRepository)
    );

    app.POST('/login',
    checkLoginMW(objectRepository)
    );
};
