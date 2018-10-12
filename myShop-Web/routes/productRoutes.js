//MW:
const autheticationMW = require("../middlewares/generic/authentication");
const renderMW = require("../middlewares/generic/render");

const deleteProductMW = require("../middlewares/products/deleteProduct");
const getAllProductMW = require("../middlewares/products/getAllProduct");
const getOneProductMW = require("../middlewares/products/getOneProduct");
const getSearchedProductsMW = require("../middlewares/products/getSearchedProducts");
const saveProductMW = require("../middlewares/products/saveProduct");

module.exports = function(app) {
  const objectRepository = {};
    //------------------------------
    //Termékek listája
    app.GET('/products/:storeId',
    autheticationMW(objectRepository),
    getAllProductMW(objectRepository),
    renderMW(objectRepository,"stores.html")
    );
    //------------------------------
    //Termékek közötti keresés 
    app.GET('/products/:storeId/:searchedKeyword',
    autheticationMW(objectRepository),
    getSearchedProductsMW(objectRepository),
    renderMW(objectRepository,"stores.html")
    );
    //------------------------------
    //Termék módosítása
    app.GET('/products/:storeId/:productId/edit',
    autheticationMW(objectRepository),
    getOneProductMW(objectRepository),
    renderMW(objectRepository,"store_edit.html")
    );
    app.POST('/products/:storeId/:productId/edit',
    autheticationMW(objectRepository),
    saveProductMW(objectRepository),
    );
    //------------------------------
    //Termék törlése
    app.GET('/products/:storeId/:productId/delete',
    autheticationMW(objectRepository),
    renderMW(objectRepository,"stores.html")
    );
    app.POST('/products/:storeId/:productId/delete',
    autheticationMW(objectRepository),
    deleteProductMW(objectRepository),
    );
    //------------------------------
    //Termék hozzáadása
    app.GET('/products/:storeId/new',
    autheticationMW(objectRepository),
    getOneProductMW(objectRepository),
    renderMW(objectRepository,"store_add.html")
    );
    app.POST('/products/:storeId/new',
    autheticationMW(objectRepository),
    saveProductMW(objectRepository),
    );
    //------------------------------
};