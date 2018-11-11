var requireOption = require("../common").requireOption;

/**
 * Visszaadja az URL paraméterben megadott egy termék adatait
 */
module.exports = function(objectrepository) {
  var productModel = requireOption(objectrepository, "productModel");

  return function(req, res, next) {
    return next();
  };
};
