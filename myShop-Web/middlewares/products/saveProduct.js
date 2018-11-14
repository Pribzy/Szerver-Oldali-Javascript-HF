var requireOption = require("../common").requireOption;

/**
 * A már betöltött terméket hozzáadja a termékek listájához
 * Ha létező id-jú a termék, akkor frissíti azt
 * Ha új id-jú,akkor hozzáadja
 * Majd visszatér a termékek listája oldalra
 */
module.exports = function(objectrepository) {
  var productModel = requireOption(objectrepository, "productModel");
  var storeModel = requireOption(objectrepository, "storeModel");

  function saveCallback(req,res, next, product) {
    product.save(function(err, result) {
      if (err) {
        return next(err);
      }

      return res.redirect("/products/"+req.param("storeId"));
    });
  }


  return function(req, res, next) {
   

      if (typeof req.body.productName === "undefined") {
        return next();
      }
  
      var product = undefined;
      if (typeof res.tpl.product !== "undefined") {
        console.log("Létezik");
        product = res.tpl.product;
        product.name = req.body.productName;
        product.type = req.body.productType;
        product.subType = req.body.productSubType;
        product.servingValue = req.body.productServing;
        product.price = req.body.productPrice;

        return saveCallback(req,res, next, product);
      } else {
        console.log("Nem étezik");
        product = new productModel();
        product.name = req.body.productName;
        product.type = req.body.productType;
        product.subType = req.body.productSubType;
        product.servingValue = req.body.productServing;
        product.price = req.body.productPrice;
        storeModel.findById(req.param("storeId"), function (err, store) {
          product._store = store.id;
          console.log(product);
          return saveCallback(req,res, next, product);
        });
      }
  
      return next();
    };
  
  
};
