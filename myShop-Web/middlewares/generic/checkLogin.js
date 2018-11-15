/**
 * Megnézi, hogy a POST-ban jött-e login adat
 * Ha az egyenlő az admin-admin-nal, akkor a felhasználó belépett, és akkor átirányítjuk a Boltok listájához
 * Ha nem egyenlő, akkor hibával tér vissza
 */
module.exports = function(objectrepository) {
  return function(req, res, next) {
    //not enough parameter
    if (
      typeof req.body === "undefined" ||
      typeof req.body.userName === "undefined" ||
      typeof req.body.password === "undefined"
    ) {
      return next();
    }

    console.log("Username from form: " + req.body.userName);
    console.log("password from form: " + req.body.password);
    //login is ok, save id to session
    req.session.userName = req.body.userName;
    req.session.password = req.body.password;
    console.log("[SESSION]Username from form:" + req.session.userName);
    console.log("[SESSOIN]password from form:" + req.session.password);
    return res.redirect("/");
    return next();
  };
};
