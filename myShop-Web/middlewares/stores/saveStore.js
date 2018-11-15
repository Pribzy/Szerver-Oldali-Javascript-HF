var requireOption = require("../common").requireOption;

/**
 * A már betöltött boltot hozzáadja a boltok listájához
 * Ha létező id-jú a bolt, akkor frissíti azt
 * Ha új id-jú,akkor hozzáadja
 * Majd visszatér a boltok listája oldalra
 */
module.exports = function(objectrepository) {
  var storeModel = requireOption(objectrepository, "storeModel");

  function saveCallback(res, next, store) {
    store.save(function(err, result) {
      if (err) {
        return next(err);
      }

      return res.redirect("/stores");
    });
  }

  return function(req, res, next) {
    if (typeof req.body.storeName === "undefined") {
      return next();
    }

    var store = undefined;
    if (typeof res.tpl.store !== "undefined") {
      console.log("Létezik:" + res.tpl.store);
      store = res.tpl.store;
      store.name = req.body.storeName;
      store.street = req.body.storeStreetName;
      store.city = req.body.storeCityName;
      store.rating = req.body.storeRating;

      return saveCallback(res, next, store);
    } else {
      console.log("Nem étezik");
      store = new storeModel();
      store.name = req.body.storeName;
      store.street = req.body.storeStreetName;
      store.city = req.body.storeCityName;
      store.rating = req.body.storeRating;
      store.productCount = 0;

      return saveCallback(res, next, store);
    }

    return next();
  };
};
