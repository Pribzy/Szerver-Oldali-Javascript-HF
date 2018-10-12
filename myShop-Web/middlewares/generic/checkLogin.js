/**
 * Megnézi, hogy a POST-ban jött-e login adat
 * Ha az egyenlő az admin-admin-nal, akkor a felhasználó belépett, és akkor átirányítjuk a Boltok listájához
 * Ha nem egyenlő, akkor hibával tér vissza
*/
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};