var requireOption = require("../common").requireOption;

/**
 * A már betöltött boltot törli, majd visszatér a boltok listájához
 */
module.exports = function(objectrepository) {
  var storeModel = requireOption(objectrepository, "storeModel");

  return function(req, res, next) {
    return next();
  };
};
