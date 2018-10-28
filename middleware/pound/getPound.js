/**
 * Gets the pound for the pound id with dogs
 */
const { getPounds, getDogsByPoundId } = require('../../model/mockdb');

module.exports = function (req, res, next) {

  res.tpl = { 
    pounds: getPounds(),
    dogs: getDogsByPoundId(parseInt(req.params.poundId)),
    selectedPoundId: req.params.poundId,
    ...res.tpl
  };
  return next();
};