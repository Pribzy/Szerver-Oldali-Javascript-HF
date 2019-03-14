var requireOption = require("../common").requireOption;

/**
 * Visszaadja az URL paraméterben megadott egy bolt adatait
 */
module.exports = function(objectrepository) {
  var storeModel = requireOption(objectrepository, "storeModel");

  return function(req, res, next) {
    storeModel.findOne(
      {
        _id: req.param("storeId")
      },
      function(err, result) {
        if (err || !result) {
          return res.redirect("/stores/" + req.param("storeId") + "/edit");
        }

        res.tpl.store = result;
       
        return next();
      }
    );
  };
};
