var expect = require('chai').expect;
var autheticationMW = require('../../middlewares/generic/authentication');

describe('Authentication Middleware', function () {

  it('Should call next when username and password in session exists ', function (done) {
   var requestMock = {
       session:{
            userName: "mjqef1",
            password: "mjqef1"
       }
   };
    autheticationMW({})(requestMock,{},function(){
        done();
   });
  });

  it('Should call res.redirect when userName and password not equals "mjqef1" ', function (done) {
    var requestMock = {
        session:{ 
            userName:"NOTmjqef1",
            password:"NOTmjqef1"
        }
    };
    var responseMock = {
        redirect: function(url){
            expect(url).be.eql('/');
            done();
        }
    };
     autheticationMW({})(requestMock,responseMock,function(){
        //Assertion
        expect("next should not called").be.eql(false);
    });
   });

});