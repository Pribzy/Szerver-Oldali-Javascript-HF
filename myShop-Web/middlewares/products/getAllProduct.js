var requireOption = require("../common").requireOption;

/**
 * Visszatér a rendszer összes termékével,ami az adott id-jú bolthoz tartozik
 */
module.exports = function (objectrepository) {

  var productModel = requireOption(objectrepository, 'productModel');

  return function (req, res, next) {
    productModel.find({
      _store: req.param('storeId')
    }).populate('_product').exec(function (err, results) {
      if (err) {
        return next(err);
      }

      res.tpl.products = results;
      res.tpl.productCount = results.length;
      
      console.log("Products: " + results);
      return next();
    });
  };

};
