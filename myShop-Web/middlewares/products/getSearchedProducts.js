var requireOption = require("../common").requireOption;

/**
 * Visszaadja azokat a termékeket, amelyek megfelelnek a keresési kulcsszónaks, amelyet az URL-ből kap
 */
module.exports = function(objectrepository) {
  var productModel = requireOption(objectrepository, "productModel");

  return function(req, res, next) {
    return next();
  };
};
