/**
 * Deletes the dog for the dog id
 */
const { deleteDog } = require('../../database/dog');
module.exports = async function (req, res, next) {
  const dogId = req.params.dogId;
  await deleteDog(dogId);
  res.send(200);
};