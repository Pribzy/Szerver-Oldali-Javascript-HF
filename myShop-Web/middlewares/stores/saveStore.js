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

  function setShopType(req, store) {
    if (req.body.type === "meat") {
      store.type = "Meat";
    }
    if (req.body.type === "electronic") {
      store.type = "Electronic";
    }
    if (req.body.type === "groceries") {
      store.type = "Groceries";
    }
    if (req.body.type === "fish") {
      store.type = "Fish";
    }
    if (req.body.type === "bread") {
      store.type = "Bread";
    }
    if (req.body.type === "vegetable") {
      store.type = "Vegetable";
    }
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

     console.log(typeof store.rating);
       
     
      //Set Shop Type
      setShopType(req, store);

      return saveCallback(res, next, store);
      
    } else {
      console.log("Nem étezik");
      store = new storeModel();
      store.name = req.body.storeName;
      store.street = req.body.storeStreetName;
      store.city = req.body.storeCityName;
      store.rating = req.body.storeRating;
      store.productCount = 0;

      //Set Shop Type
      setShopType(req, store);

      return saveCallback(res, next, store);
    }

    return next();
  };
};
