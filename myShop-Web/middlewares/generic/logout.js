/**
 * Kilépteti a felhasználót
 * Ennek hatására a / -re irányítódunk vissza
*/
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};