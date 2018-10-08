
/**
 * Error handler for not found
 */
module.exports = function (req, res) {
  res.status(404).send('Not Found!');
};
