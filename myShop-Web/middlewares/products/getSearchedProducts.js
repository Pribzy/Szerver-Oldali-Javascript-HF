var requireOption = require("../common").requireOption;

/**
 * Visszaadja azokat a termékeket, amelyek megfelelnek a keresési kulcsszónaks, amelyet az URL-ből kap
 */
module.exports = function (objectrepository) {

  var productModel = requireOption(objectrepository, 'productModel');

  return function (req, res, next) {
    var searchedKeyword = req.param("searchedKeyword")
   
    //lets find the user
    productModel.find({"name" : {$regex: ".*" + searchedKeyword + ".*"} ,
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
