var requireOption = require("../common").requireOption;

/**
 * Visszatér a rendszer összes boltjával
 */
module.exports = function(objectrepository) {
  var storeModel = requireOption(objectrepository, "storeModel");

  return function(req, res, next) {
    
    storeModel.find({}, function(err, results) {
      if (err) {
        return next(err);
      }

      res.tpl.stores = results;
      res.tpl.storeCount = results.length;

      return next();
    });
  };
};
