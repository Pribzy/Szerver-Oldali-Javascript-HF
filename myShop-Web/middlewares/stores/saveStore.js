var requireOption = require("../common").requireOption;

/**
 * A már betöltött boltot hozzáadja a boltok listájához
 * Ha létező id-jú a bolt, akkor frissíti azt
 * Ha új id-jú,akkor hozzáadja
 * Majd visszatér a boltok listája oldalra
 */
module.exports = function(objectrepository) {
  return function(req, res, next) {
    return next();
  };
};
