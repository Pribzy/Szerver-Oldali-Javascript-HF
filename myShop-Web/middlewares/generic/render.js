/**
 * Megjeleníti a paraméterben kapott HTML oldalt
 */

module.exports = function (objectrepository, viewName) {

    return function (req, res) {
        res.render(viewName, res.tpl);
    };

}