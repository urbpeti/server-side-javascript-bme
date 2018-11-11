const DogModel = require('./dogmodel');
const PoundModel = require('./../pound/poundmodel');

async function insertDog(input) {
  const pound = await PoundModel.findOne({ id: input.pound_id }).exec();
  const dog = new DogModel({
    name: input.name,
    species: input.species,
    age: input.age,
    color: input.color,
    pound_id: pound._id
  });

  let error = dog.validateSync();
  if (error)
    return console.error('Dog validate error: ' + error);

  try {
    await dog.save();
    pound.dogs.push(dog);
    error = await pound.save();
  } catch (e) {
    return console.error('New dog error: ' + e);
  }
}

async function getDogsWithPoundLocation() {
  return DogModel.find({})
    .populate('pound_id')
    .exec()
    .then(dogs => dogs.map(dog => ({
      pound: dog.pound_id.location,
      name: dog.name,
      species: dog.species,
      age: dog.age,
      color: dog.color,
      id: dog._id
    })));
}

async function getDogById(id) {
  return DogModel.findOne({ _id: id})
    .populate('pound_id')
    .exec()
    .then(dog => ({
      id: dog._id,
      name: dog.name,
      species: dog.species,
      color: dog.color,
      age: dog.age,
      pound: dog.pound_id.location
    }));
}

module.exports = {
  insertDog,
  getDogsWithPoundLocation,
  getDogById
};