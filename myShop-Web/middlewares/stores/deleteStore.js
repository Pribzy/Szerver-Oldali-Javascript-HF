var requireOption = require("../common").requireOption;

/**
 * A már betöltött boltot törli, majd visszatér a boltok listájához
 */
module.exports = function(objectrepository) {
  return function(req, res, next) {
    if (typeof res.tpl.store === "undefined") {
      return next();
    }

    res.tpl.store.remove(function(err) {
      if (err) {
        return next(err);
      }

      //redirect to all tasks
      res.redirect("/stores");
    });
  };
};
