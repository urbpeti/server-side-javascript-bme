/**
 * Gets the dog for the dog id
 *  - if there is no such dog, redirect to /dogs
 *  - if there is one, put it on res.
 */
const { getDogById } = require('../../database/dog');

module.exports = async function (req, res, next) {
  res.tpl = {
    title: 'Kutya részletes adatai',
    dog: await getDogById(req.params.dogId),
    ...res.tpl
  };
  return next();
};