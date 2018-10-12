
/**
 * Megnézi, hogy a felhasználó be van-e jeletkezve
 * Ha nincs, akkor visszairányítja a / (főoldalra)
 * Ha be van jelentkezve, akkor folytatódhat a munkamenet
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};