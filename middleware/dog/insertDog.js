/**
 * Insert a new dog
 */
const { insertDog } = require('../../database/dog');

module.exports = async function (req, res, next) {
  await insertDog({
    name: req.body.name,
    species: req.body.species,
    age: parseInt(req.body.age),
    color: req.body.color,
    pound_id: req.body.pound_id
  });
  res.redirect('/dog/list');
  //return next();
};