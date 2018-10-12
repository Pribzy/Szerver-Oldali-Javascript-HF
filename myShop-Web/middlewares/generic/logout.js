/**
 * Kilépteti a felhasználót
 * Ennek hatására a / -re irányítja vissza
*/
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};