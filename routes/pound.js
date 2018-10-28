const express = require('express');
const router = express.Router();

const listPounds = require('../middleware/pound/listPounds');
const getPound = require('../middleware/pound/getPound');
const insertPound = require('../middleware/pound/insertPound');
const poundNavbar = require('../middleware/pound/poundNavbar');

const renderMW = require('../middleware/generic/render');


router.get('/list',
  poundNavbar,
  listPounds,
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