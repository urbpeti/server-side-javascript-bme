const Schema = require('mongoose').Schema;
const db = require('../../db');

new Schema({
  username: {
    type: String,
    unique: true
  }
});

var Pound = db.model('Pound', new Schema({
  id: {
    type: String,
    unique: true,
    index: true
  },
  location: String,
  dogs: [{
    type: Schema.Types.ObjectId,
    ref: 'Dog'
  }]
}));

module.exports = Pound;