const express = require('express');
const router = express.Router();

const listPoundsWithDogsCount = require('../middleware/pound/listPoundsWithDogCount');
const getPound = require('../middleware/pound/getPound');
const insertPound = require('../middleware/pound/insertPound');
const poundNavbar = require('../middleware/pound/poundNavbar');

const renderMW = require('../middleware/generic/render');


router.get('/list',
  poundNavbar,
  listPoundsWithDogsCount,
  renderMW('poundlist')
);

router.get('/details/:poundId',
  poundNavbar,
  getPound,
  renderMW('pounddetails')
);

router.post('/new',
  insertPound
);

router.get('/new',
  poundNavbar,
  renderMW('poundnew')
);

module.exports = router;