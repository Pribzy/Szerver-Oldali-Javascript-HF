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
  //Bolt hozzáadása
  app.get(
    "/stores/new",
    autheticationMW(objectRepository),
    renderMW(objectRepository, "store_add")
  );
  app.post(
    "/stores/new",
    autheticationMW(objectRepository),
    saveStoreMW(objectRepository)
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
  //Boltok közötti keresés
  app.get(
    "/stores/:searchedKeyword",
    autheticationMW(objectRepository),
    getSearchedStoresMW(objectRepository),
    renderMW(objectRepository, "stores")
  );

  //------------------------------
  //Bolt törlése
  app.use(
    "/stores/:storeId/delete",
    autheticationMW(objectRepository),
    getOneStoreMW(objectRepository),
    deleteStoreMW(objectRepository),
    function(req, res, next) {
      return res.redirect("/stores");
    }
    //renderMW(objectRepository, "stores")
  );

  //------------------------------
};
