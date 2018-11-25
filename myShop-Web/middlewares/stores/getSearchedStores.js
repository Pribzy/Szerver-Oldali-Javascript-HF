var requireOption = require("../common").requireOption;

/**
 * Visszaadja azokat a boltokat, amelyek megfelelnek a keresési kulcsszónak, amelyet az URL-ből kap
 */

  
  module.exports = function(objectrepository) {
    var storeModel = requireOption(objectrepository, "storeModel");
  
    return function(req, res, next) {

      var searchedKeyword = req.param("searchedKeyword")
      console.log(searchedKeyword)
      //lets find the user
    storeModel.find({"name" : {$regex: ".*" + searchedKeyword + ".*"}},function(err, results) {
      //storeModel.find({"name" : {/.*searchedKeyword.*/}},function(err, results) {
      
        if (err) {
          return next(err);
        }
        
        res.tpl.stores = results;
        res.tpl.storeCount = results.length;
        
        return next();
      });
    };
  };
