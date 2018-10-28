/**
 * List pounds
 */
const { getPoundsWithDogCount } = require('../../model/mockdb');

module.exports = function (req, res, next) {
  res.tpl = {
    pounds: getPoundsWithDogCount(),
    ...res.tpl
  };
  return next();
};