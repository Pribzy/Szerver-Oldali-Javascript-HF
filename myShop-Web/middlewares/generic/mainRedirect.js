/**
 * This middleware has one purpose, when the user visits the / main page,
 * should be redirected to
 *    - /login when not signed in
 *    - /tasks when signed in
 */
module.exports = function(objectrepository) {
  return function(req, res, next) {
    console.log(
      "[SESSION in mainredirect]Username from :" + req.session.userName
    );
    console.log(
      "[SESSOIN in mainredirect]password from :" + req.session.password
    );

    if (
      req.session.userName === "mjqef1" &&
      req.session.password === "mjqef1"
    ) {
      return res.redirect("/stores");
    } else {
      return res.redirect("/login");
    }
  };
};
