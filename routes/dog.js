const express = require('express');
const router = express.Router();

const dogNavbar = require('../middleware/dog/dogNavbar');
const listDogs = require('../middleware/dog/listDogs');
const getDog = require('../middleware/dog/getDog');
const updatedDog = require('../middleware/dog/updateDog');
const insertDog = require('../middleware/dog/insertDog');
const deleteDog = require('../middleware/dog/deleteDog');
const listPounds = require('../middleware/pound/listPounds');

const renderMW = require('../middleware/generic/render');

router.get('/list',
  dogNavbar,
  listDogs,
  renderMW('doglist')
);

router.get('/details/:dogId',
  dogNavbar,
  getDog,
  renderMW('dogdetails')
);

router.get('/edit/:dogId',
  dogNavbar,
  getDog,
  renderMW('dogedit')
);

router.post('/edit/:dogId',
  updatedDog
);

router.get('/new',
  dogNavbar,
  listPounds,
  renderMW('dognew')
);

router.post('/new',
  insertDog
);

router.post('/delete/:dog',
  deleteDog
);

module.exports = router;