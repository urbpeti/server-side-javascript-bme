const Schema = require('mongoose').Schema;
const db = require('../../db');

const Dog = db.model('Dog', {
  name: String,
  species: String,
  age: Number,
  color: String,
  pound_id: {
    type: Schema.Types.ObjectId,
    ref: 'Pound'
  }
});

module.exports = Dog;