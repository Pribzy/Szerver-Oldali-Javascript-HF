var Schema = require('mongoose').Schema;
var db = require('../config/db');

//Egy boltban több termék lehet

var Product = db.model('Product', {
  name: String,
  type: String,
  subType:String,
  servingValue:Number,
  price:Number,
  _store: {
    type: Schema.Types.ObjectId,
    ref: 'Store'
  }
});

module.exports = Product;