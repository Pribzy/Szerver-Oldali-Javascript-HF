//MW:
const autheticationMW = require("../middlewares/generic/authentication");
const renderMW = require("../middlewares/generic/render");

const deleteProductMW = require("../middlewares/products/deleteProduct");
const getAllProductMW = require("../middlewares/products/getAllProduct");
const getOneProductMW = require("../middlewares/products/getOneProduct");
const getSearchedProductsMW = require("../middlewares/products/getSearchedProducts");
const saveProductMW = require("../middlewares/products/saveProduct");

//Modellek
var storeModel = require("../model/product");

module.exports = function(app) {
  const objectRepository = {
    productModel: productModel
  };
  //------------------------------
  //Termékek listája
  app.get(
    "/products/:storeId",
    autheticationMW(objectRepository),
    getAllProductMW(objectRepository),
    renderMW(objectRepository, "products")
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
  //Termék módosítása
  app.get(
    "/products/:storeId/:productId/edit",
    autheticationMW(objectRepository),
    getOneProductMW(objectRepository),
    renderMW(objectRepository, "product_edit")
  );
  app.post(
    "/products/:storeId/:productId/edit",
    autheticationMW(objectRepository),
    saveProductMW(objectRepository)
  );
  //------------------------------
  //Termék törlése
  app.get(
    "/products/:storeId/:productId/delete",
    autheticationMW(objectRepository),
    renderMW(objectRepository, "products")
  );
  app.post(
    "/products/:storeId/:productId/delete",
    autheticationMW(objectRepository),
    deleteProductMW(objectRepository)
  );
  //------------------------------
  //Termék hozzáadása
  app.get(
    "/products/:storeId/new",
    autheticationMW(objectRepository),
    getOneProductMW(objectRepository),
    renderMW(objectRepository, "product_add")
  );
  app.post(
    "/products/:storeId/new",
    autheticationMW(objectRepository),
    saveProductMW(objectRepository)
  );
  //------------------------------
};
