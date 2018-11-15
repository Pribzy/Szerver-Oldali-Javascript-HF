var requireOption = require("../common").requireOption;

/**
 * Visszatér a rendszer összes boltjával
 */
module.exports = function(objectrepository) {
  var storeModel = requireOption(objectrepository, "storeModel");

  return function(req, res, next) {
    //lets find the user
    storeModel.find({}, function(err, results) {
      if (err) {
        return next(err);
      }
      console.log("Boltok száma: " + results.count);
      res.tpl.stores = results;
      res.tpl.count = storeModel.count;

      return next();
    });
  };
};
