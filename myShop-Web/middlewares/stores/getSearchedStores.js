var requireOption = require("../common").requireOption;

/**
 * Visszaadja azokat a boltokat, amelyek megfelelnek a keresési kulcsszónak, amelyet az URL-ből kap
 */
module.exports = function(objectrepository) {
  var storeModel = requireOption(objectrepository, "storeModel");

  return function(req, res, next) {
    return next();
  };
};
