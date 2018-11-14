var requireOption = require("../common").requireOption;

/**
 * A már betöltött terméket törli, majd visszatér a termékek listájához
 */
module.exports = function(objectrepository) {
  return function(req, res, next) {
    if (typeof res.tpl.product === "undefined") {
      return next();
    }
    
    res.tpl.product.remove(function(err) {
      if (err) {
        return next(err);
      }

      //redirect to all tasks
      
      res.redirect("/products/"+req.param("storeId"));
    });
  };
};
