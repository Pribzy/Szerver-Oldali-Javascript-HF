/**
 * ellenőrzi, hogy hibás bejelentkezés volt-e
 * Ha igen, akkor ezt az infót átadja a rendernek
 * Ha nem, akkor simán jelenik meg az oldal
*/
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};