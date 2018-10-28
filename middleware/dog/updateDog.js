/**
 * Updates the dog for the dog id
 */
module.exports = function (req, res, next) {
  const dogId = req.params.dogId;
  //TODO insert implementation
  res.redirect(`/dog/details/${dogId}`);
  //return next();
};