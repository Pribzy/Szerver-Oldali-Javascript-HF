//MW:
const autheticationMW = require("../middlewares/generic/authentication");
const renderMW = require("../middlewares/generic/render");

const deleteStoreMW = require("../middlewares/stores/deleteStore");
const getAllStoreMW = require("../middlewares/stores/getAllStore");
const getOneStoreMW = require("../middlewares/stores/getOneStore");
const getSearchedStoresMW = require("../middlewares/stores/getSearchedStores");
const saveStoreMW = require("../middlewares/stores/saveStore");

module.exports = function(app) {
  const objectRepository = {};
    //------------------------------
    //Boltok listája
    app.GET('/stores',
    autheticationMW(objectRepository),
    getAllStoreMW(objectRepository),
    renderMW(objectRepository,"stores.html")
    );
    //------------------------------
    //Boltok közötti keresés 
    app.GET('/stores/:searchedKeyword',
    autheticationMW(objectRepository),
    getSearchedStoresMW(objectRepository),
    renderMW(objectRepository,"stores.html")
    );
    //------------------------------
    //Bolt módosítása
    app.GET('/stores/:storeId/edit',
    autheticationMW(objectRepository),
    getOneStoreMW(objectRepository),
    renderMW(objectRepository,"store_edit.html")
    );
    app.POST('/stores/:storeId/edit',
    autheticationMW(objectRepository),
    saveStoreMW(objectRepository),
    );
    //------------------------------
    //Bolt törlése
    app.GET('/stores/:storeId/delete',
    autheticationMW(objectRepository),
    renderMW(objectRepository,"stores.html")
    );
    app.POST('/stores/:storeId/delete',
    autheticationMW(objectRepository),
    deleteStoreMW(objectRepository),
    );
    //------------------------------
    //Bolt hozzáadása
    app.GET('/stores/new',
    autheticationMW(objectRepository),
    getOneStoreMW(objectRepository),
    renderMW(objectRepository,"store_add.html")
    );
    app.POST('/stores/new',
    autheticationMW(objectRepository),
    saveStoreMW(objectRepository),
    );
    //------------------------------
};
