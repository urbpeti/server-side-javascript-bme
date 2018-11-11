const express = require('express');
const app = express();
const notfound = require('./middleware/errorhandling/notfound');
const bodyParser = require('body-parser');

/**
 * Static data
 */
app.use(express.static('public'));

/**
 * set the view engine to ejs
 */
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Dog routing
 */
app.use('/dog', require('./routes/dog'));

/**
 * Dog routing
 */
app.use('/pound', require('./routes/pound'));

app.use(notfound);

app.listen(3000, function () {
  console.log('Hello :3000');  // eslint-disable-line no-console
});
