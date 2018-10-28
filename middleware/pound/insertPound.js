/**
 * Insert a new pound 
 */
module.exports = function (req, res, next) {
  res.redirect('/pound/list');

  return next();
};