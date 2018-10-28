/**
 * Gets the dog for the dog id
 *  - if there is no such dog, redirect to /dogs
 *  - if there is one, put it on res.
 */
const { getDogById } = require('../../model/mockdb');

module.exports = function (req, res, next) {
  res.tpl = {
    title: 'Kutya részletes adatai',
    dog: getDogById(parseInt(req.params.dogId)),
    ...res.tpl
  };
  return next();
};