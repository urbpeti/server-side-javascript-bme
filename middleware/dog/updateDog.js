/**
 * Updates the dog for the dog id
 */
const { updateDog } = require('../../database/dog');
module.exports = async function (req, res, next) {
  const dogId = req.params.dogId;
  //TODO insert implementation
  await updateDog(dogId, {
    name: req.body.name,
    species: req.body.species,
    age: parseInt(req.body.age),
    color: req.body.color,
    pound_id: req.body.pound_id
  });

  res.redirect(`/dog/details/${dogId}`);
  //return next();
};