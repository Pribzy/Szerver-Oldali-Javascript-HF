var requireOption = require("../common").requireOption;

/**
 * Visszatér a rendszer összes boltjával
 */
module.exports = function(objectrepository) {
  var storeModel = requireOption(objectrepository, "storeModel");

  return function(req, res, next) {
    storeModel
      .find({})
      .populate("_assignedto")
      .exec(function(err, results) {
        if (err) {
          return next(new Error("Error getting tasks"));
        }

        res.tpl.stores = results;
        return next();
      });
  };
};
