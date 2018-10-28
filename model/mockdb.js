const pounds = [
  {
    id: 1,
    location: 'VI. kerületi menhely',
    dogs: [
      {
        id: 1,
        name: 'Bodri',
        species: 'Uszkár',
        age: 6,
        color: 'Fekete',
      },
      {
        id: 2,
        name: 'Bundás',
        species: 'Németjuhász',
        age: 9,
        color: 'Barna',
      },
      {
        id: 3,
        name: 'Zsömle',
        species: 'Vizsla',
        age: 4,
        color: 'Barna',
      },
    ]
  },
  {
    id: 2,
    location: 'XI. kerületi menhely',
    dogs: [
      {
        id: 4,
        name: 'Paca',
        species: 'Dalmata',
        age: 3,
        color: 'Fekete-Fehér',
      },
      {
        id: 5,
        name: 'Liza',
        species: 'Ír szetter',
        age: 8,
        color: 'Barna',
      },
    ]
  },
  {
    id: 3,
    location: 'XII. kerületi menhely',
    dogs: [
      {
        id: 6,
        name: 'Szofi',
        species: 'Tacskó',
        age: 10,
        color: 'Fekete',
      },
    ]
  },
];


module.exports = {
  getDogsWithPoundLocation: function () {
    let dogs = [];
    pounds.forEach( pound => {
      dogs = dogs.concat(pound.dogs.map(dog => {return {...dog, pound: pound.location};}));
    });
    return dogs;
  },
  getDogsByPoundId: function (poundId) {
    const pound = pounds.find(pound => poundId == pound.id);
    return pound.dogs.map(dog => {
      return {...dog, pound: pound.location };
    });
  },
  getDogById: function(dogId) {
    let dogs = [];
    pounds.forEach( pound => {
      dogs = dogs.concat(pound.dogs.map(dog => {return {...dog, pound: pound.location};}));
    });
    return dogs.find(dog => dog.id === dogId);
  },
  getPounds: function () {
    return pounds.map(pound => {
      return {
        id: pound.id,
        location: pound.location
      };
    });
  },
  getPoundsWithDogCount: function () {
    return pounds.map(pound => {
      return {
        id: pound.id,
        location: pound.location,
        dogCount: pound.dogs.length
      };
    });
  }
};
