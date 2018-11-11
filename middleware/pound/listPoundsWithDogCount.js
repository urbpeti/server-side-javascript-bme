/**
 * List pounds
 */
const { getPoundsWithDogCount } = require('../../database/pound');

module.exports = async function (req, res, next) {
  res.tpl = {
    pounds: await getPoundsWithDogCount(),
    ...res.tpl
  };
  return next();
};