var requireOption = require("../common").requireOption;

/**
 * A már betöltött terméket törli, majd visszatér a termékek listájához
 */
module.exports = function(objectrepository) {
  var productModel = requireOption(objectrepository, "productModel");

  return function(req, res, next) {
    return next();
  };
};
