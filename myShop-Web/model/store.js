var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Store = db.model('Store', {
  name: String,
  city: String,
  street: String,
  rating: Number,
  type: String,
  _product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }
});

module.exports = Store;