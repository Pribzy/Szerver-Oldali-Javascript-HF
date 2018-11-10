var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Product = db.model('Product', {
  name: String,
  type: String,
  subType:String,
  servingValue:Number,
  price:Number
});

module.exports = Products;