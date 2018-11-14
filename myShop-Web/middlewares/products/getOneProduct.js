var requireOption = require("../common").requireOption;

/**
 * Visszaadja az URL paraméterben megadott egy termék adatait
 */
module.exports = function(objectrepository) {
  var productModel = requireOption(objectrepository, "productModel");

  return function(req, res, next) {
    productModel.findOne(
      {
        _id: req.param("productId")
      },
      function(err, result) {
        if (err || !result) {
          //return res.redirect("/products/" + req.param("storeId") + "/edit");
        }

        res.tpl.product = result;
        console.log(res.tpl.product);
        return next();
      }
    );
  };
};
