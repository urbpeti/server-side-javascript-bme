/**
 * Insert a new dog
 */
module.exports = function (req, res, next) {
  res.redirect('/dog/list');
  return next();
};