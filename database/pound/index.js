const PoundModel = require('./poundmodel');

async function insertPound(input) {
  const pound = new PoundModel({
    id: input.id,
    location: input.location,
  });

  let error = pound.validateSync();
  if (error) return console.error(error);

  error = await pound.save();
  if (error) return console.error(error);
}

async function getPoundsWithDogCount() {
  return PoundModel.find({})
    .populate('dogs')
    .exec()
    .then(pounds =>
      pounds.map(pound => {
        return {
          dogCount: pound.dogs.length,
          location: pound.location,
          id: pound.id
        };
      }));
}

async function getPounds() {
  return PoundModel.find({})
    .exec()
    .then(pounds => pounds.map(pound => ({
      id: pound.id,
      location: pound.location
    })));
}

async function getDogsByPoundId(id) {
  return PoundModel.findOne({ id: id })
    .populate('dogs')
    .exec()
    .then(pound => pound.dogs);
}

module.exports = {
  insertPound,
  getPoundsWithDogCount,
  getPounds,
  getDogsByPoundId
};