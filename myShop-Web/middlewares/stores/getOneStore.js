var requireOption = require("../common").requireOption;

/**
 * Visszaadja az URL paraméterben megadott egy bolt adatait
 */
module.exports = function(objectrepository) {
  var storeModel = requireOption(objectrepository, "storeModel");

  return function(req, res, next) {
    return next();
  };
};
