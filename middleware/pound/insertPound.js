/**
 * Insert a new pound 
 */
const { insertPound } = require('./../../database/pound');
module.exports = function (req, res, next) {
  insertPound({
    id: req.body.id,
    location: req.body.location
  });
  res.redirect('/pound/list');
  //return next();
};