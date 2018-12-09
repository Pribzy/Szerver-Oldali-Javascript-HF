var expect = require('chai').expect;
var getAllStoreMW = require('../../middlewares/stores/getAllStore');

describe('Get All Stores Middleware', function () {

    it('Should return all store', function (done) {
     var requestMock = {};
     var responseMock = {
        tpl: {}
     };
     var fakeStoreModel = {
        find: function (some, cb) {
          cb(undefined,['store_1', 'store_2'])
        }
    };
    getAllStoreMW({
        storeModel:fakeStoreModel
    })(requestMock,responseMock,function(err){
        expect(responseMock.tpl.stores).to.eql(['store_1', 'store_2']);
        expect(err).to.eql(undefined);
        done();
         
     });
    });
  
    it('Should return error when db returns error', function (done) {
        var fakeStoreModel = {
          find: function (some, cb) {
            cb('store', undefined)
          }
        };
    
        getAllStoreMW({
          storeModel: fakeStoreModel
        })({}, {}, function (err) {
          expect(err).to.eql('store');
          done();
        });
      });

  });