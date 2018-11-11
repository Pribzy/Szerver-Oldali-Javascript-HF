//MW:
const autheticationMW = require("../middlewares/generic/authentication");
const renderMW = require("../middlewares/generic/render");

const deleteStoreMW = require("../middlewares/stores/deleteStore");
const getAllStoreMW = require("../middlewares/stores/getAllStore");
const getOneStoreMW = require("../middlewares/stores/getOneStore");
const getSearchedStoresMW = require("../middlewares/stores/getSearchedStores");
const saveStoreMW = require("../middlewares/stores/saveStore");

//Modellek
var storeModel = require("../model/store");

module.exports = function(app) {
  const objectRepository = {
    storeModel: storeModel
  };
  //------------------------------
  //Boltok listája
  app.get(
    "/stores",
    autheticationMW(objectRepository),
    getAllStoreMW(objectRepository),
    renderMW(objectRepository, "stores")
  );
  //------------------------------
  //Boltok közötti keresés
  app.get(
    "/stores/:searchedKeyword",
    autheticationMW(objectRepository),
    getSearchedStoresMW(objectRepository),
    renderMW(objectRepository, "stores")
  );
  //------------------------------
  //Bolt módosítása
  app.get(
    "/stores/:storeId/edit",
    autheticationMW(objectRepository),
    getOneStoreMW(objectRepository),
    renderMW(objectRepository, "store_edit")
  );
  app.post(
    "/stores/:storeId/edit",
    autheticationMW(objectRepository),
    saveStoreMW(objectRepository)
  );
  //------------------------------
  //Bolt törlése
  app.get(
    "/stores/:storeId/delete",
    autheticationMW(objectRepository),
    renderMW(objectRepository, "stores")
  );
  app.post(
    "/stores/:storeId/delete",
    autheticationMW(objectRepository),
    deleteStoreMW(objectRepository)
  );
  //------------------------------
  //Bolt hozzáadása
  app.get(
    "/stores/new",
    autheticationMW(objectRepository),
    getOneStoreMW(objectRepository),
    renderMW(objectRepository, "store_add")
  );
  app.post(
    "/stores/new",
    autheticationMW(objectRepository),
    saveStoreMW(objectRepository)
  );
  //------------------------------
};
