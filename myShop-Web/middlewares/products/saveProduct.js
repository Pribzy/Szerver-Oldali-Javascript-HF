var requireOption = require("../common").requireOption;

/**
 * A már betöltött terméket hozzáadja a termékek listájához
 * Ha létező id-jú a termék, akkor frissíti azt
 * Ha új id-jú,akkor hozzáadja
 * Majd visszatér a termékek listája oldalra
 */
module.exports = function(objectrepository) {
  return function(req, res, next) {
    return next();
  };
};
