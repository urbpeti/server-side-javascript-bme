const express = require('express');
const router = express.Router();

const listDogs = require('../middleware/dog/listDogs');
const getDog = require('../middleware/dog/getDog');
const updatedDog = require('../middleware/dog/updateDog');
const insertDog = require('../middleware/dog/insertDog');
const deleteDog = require('../middleware/dog/deleteDog');

const renderMW = require('../middleware/generic/render');

router.get('/list',
  listDogs,
  renderMW('dogs')
);

router.get('/:dog',
  getDog,
  renderMW('dogs')
);

router.post('/new',
  insertDog,
  renderMW('dogs')
);

router.delete('/:dog',
  deleteDog,
  renderMW('dogs')
);

router.put('/:dog',
  updatedDog,
  renderMW('dogs')
);

module.exports = router;