/**
 * List dogs
 */
const db = require('../../model/mockdb');

module.exports = function (req, res, next) {
  res.tpl = {
    title: 'Kutyák',
    dogs: db.getDogsWithPoundLocation(),
    ...res.tpl
  };
  return next();
};