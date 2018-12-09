/**
 * Megnézi, hogy a felhasználó be van-e jeletkezve
 * Ha nincs, akkor visszairányítja / -re (főoldalra)
 * Ha be van jelentkezve, akkor folytatódhat a munkamenet
 */
module.exports = function(objectrepository) {
  return function(req, res, next) {
    if (req.session.userName != "mjqef1" && req.session.password != "mjqef1") {
      return res.redirect("/");
    }
    return next();
  };
};
