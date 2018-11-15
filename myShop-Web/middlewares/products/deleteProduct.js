var requireOption = require("../common").requireOption;

/**
 * A már betöltött terméket törli, majd visszatér a termékek listájához
 */
module.exports = function(objectrepository) {
  var storeModel = requireOption(objectrepository, "storeModel");

  return function(req, res, next) {
    if (typeof res.tpl.product === "undefined") {
      return next();
    }

    res.tpl.product.remove(function(err) {
      if (err) {
        return next(err);
      }

      storeModel.findById(req.param("storeId"), function(err, store) {
        //Save store
        store.productCount = store.productCount - 1;
        store.save(function(err, result) {
          if (err) {
            return next(err);
          }
        });

        //Vissza a temrékekhez
        res.redirect("/products/" + req.param("storeId"));
      });
    });
  };
};
