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
    await pound.save();
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
  return DogModel.findOne({ _id: id })
    .populate('pound_id')
    .exec()
    .then(dog => ({
      id: dog._id,
      name: dog.name,
      species: dog.species,
      color: dog.color,
      age: dog.age,
      pound: {
        location: dog.pound_id.location,
        id: dog.pound_id.id
      }
    }));
}

async function updateDog(id, input) {
  const oldPound = await PoundModel.findOne({
    dogs: {
      $in: [id]
    }
  });

  oldPound.dogs.splice(oldPound.dogs.indexOf(id), 1);
  await oldPound.save();
  const pound = await PoundModel.findOne({ id: input.pound_id }).exec();
  const dog = await DogModel.findOneAndUpdate(
    { _id: id },
    {
      name: input.name,
      species: input.species,
      age: input.age,
      color: input.color,
      pound_id: pound._id
    }
  );

  pound.dogs.push(dog);
  await pound.save();
}

async function deleteDog(id) {
  const pound = await PoundModel.findOne({
    dogs: {
      $in: [id]
    }
  }).exec();
  pound.dogs.splice(pound.dogs.indexOf(id), 1);
  await pound.save();
  await DogModel.deleteOne({ _id: id });
}


module.exports = {
  insertDog,
  getDogsWithPoundLocation,
  getDogById,
  updateDog,
  deleteDog
};