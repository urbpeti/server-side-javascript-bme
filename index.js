const express = require('express');
const app = express();

/**
 * Static stuff
 */
app.use(express.static('public'));

/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
  res.status(500).send('Houston, we have a problem!');

  //Flush out the stack to the console
  console.error(err.stack);
});

var server = app.listen(3000, function () {
  console.log('Hello :3000');
});
