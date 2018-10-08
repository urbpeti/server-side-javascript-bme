const express = require('express');
const router = express.Router();

const listPounds = require('../middleware/pound/listPounds');
const getPound = require('../middleware/pound/getPound');
const insertPound = require('../middleware/pound/insertPound');

const renderMW = require('../middleware/generic/render');


router.get('/list',
  listPounds,
  renderMW('pounds')
);

router.get('/:pound',
  getPound,
  renderMW('pounds')
);

router.post('/new',
  insertPound,
  renderMW('pounds')
);

module.exports = router;