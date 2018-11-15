//MW:
const autheticationMW = require("../middlewares/generic/authentication");
const renderMW = require("../middlewares/generic/render");

const deleteProductMW = require("../middlewares/products/deleteProduct");
const getAllProductMW = require("../middlewares/products/getAllProduct");
const getOneProductMW = require("../middlewares/products/getOneProduct");
const getOneStoreMW = require("../middlewares/stores/getOneStore");
const getSearchedProductsMW = require("../middlewares/products/getSearchedProducts");
const saveProductMW = require("../middlewares/products/saveProduct");

//Modellek
var productModel = require("../model/product");
var storeModel = require("../model/store");

module.exports = function(app) {
  const objectRepository = {
    productModel: productModel,
    storeModel: storeModel
  };
  //------------------------------
  //Termékek listája
  app.get(
    "/products/:storeId",
    autheticationMW(objectRepository),
    getOneStoreMW(objectRepository),
    getAllProductMW(objectRepository),
    renderMW(objectRepository, "products")
  );
  //------------------------------
  //Termék módosítása
  app.get(
    "/products/:storeId/:productId/edit",
    autheticationMW(objectRepository),
    getOneStoreMW(objectRepository),
    getOneProductMW(objectRepository),
    renderMW(objectRepository, "product_edit")
  );
  app.post(
    "/products/:storeId/:productId/edit",
    autheticationMW(objectRepository),
    getOneProductMW(objectRepository),
    saveProductMW(objectRepository)
  );

  //------------------------------
  //Termék hozzáadása
  app.get(
    "/products/:storeId/new",
    autheticationMW(objectRepository),
    getOneStoreMW(objectRepository),
    renderMW(objectRepository, "product_add")
  );
  app.post(
    "/products/:storeId/new",
    autheticationMW(objectRepository),
    saveProductMW(objectRepository)
  );
  //------------------------------
  //Termékek közötti keresés
  app.get(
    "/products/:storeId/:searchedKeyword",
    autheticationMW(objectRepository),
    getSearchedProductsMW(objectRepository),
    renderMW(objectRepository, "products")
  );
  //------------------------------

  //Termék törlése
  app.use(
    "/products/:storeId/:productId/delete",
    autheticationMW(objectRepository),
    getOneProductMW(objectRepository),
    deleteProductMW(objectRepository),
    renderMW(objectRepository, "products")
  );
  //------------------------------
};
