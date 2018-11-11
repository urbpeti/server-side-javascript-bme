/**
 * List pounds
 */
const { getPounds } = require('../../database/pound');

module.exports = async function (req, res, next) {
  res.tpl = {
    pounds: await getPounds(),
    ...res.tpl
  };
  return next();
};