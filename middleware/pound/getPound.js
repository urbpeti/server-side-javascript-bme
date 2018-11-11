/**
 * Gets the pound for the pound id with dogs
 */
const { getPounds, getDogsByPoundId } = require('../../database/pound');

module.exports = async function (req, res, next) {

  res.tpl = {
    pounds: await getPounds(),
    dogs: await getDogsByPoundId(parseInt(req.params.poundId)),
    selectedPoundId: req.params.poundId,
    ...res.tpl
  };
  return next();
};