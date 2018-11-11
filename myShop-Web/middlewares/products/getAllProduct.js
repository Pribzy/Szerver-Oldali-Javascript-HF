var requireOption = require("../common").requireOption;

/**
 * Visszatér a rendszer összes termékével,ami az adott id-jú bolthoz tartozik
 */
module.exports = function(objectrepository) {
  var productModel = requireOption(objectrepository, "productModel");

  return function(req, res, next) {
    return next();
  };
};
