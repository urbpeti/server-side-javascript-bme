/**
 * List dogs
 */
const { getDogsWithPoundLocation } = require('../../database/dog');

module.exports = async function (req, res, next) {
  res.tpl = {
    title: 'Kutyák',
    dogs: await getDogsWithPoundLocation(),
    ...res.tpl
  };
  return next();
};