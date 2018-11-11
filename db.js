const mongoose = require('mongoose');
const username = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;

const url = 'mongodb://mongo';
const options = {
  dbName: 'pound',
  user: username,
  pass: password
};

mongoose.connect(url, options);

module.exports = mongoose;