var requireOption = require("../common").requireOption;

/**
 * Visszatér a rendszer összes boltjával
 */
module.exports = function(objectrepository) {
  var storeModel = requireOption(objectrepository, "storeModel");

  return function(req, res, next) {
    return next();
  };
};
