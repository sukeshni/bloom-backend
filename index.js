'use strict';

var
  express = require('express'),
  app = express(),
  parser = require('body-parser'),
  port = process.env.PORT || 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(require('./controllers'));

app.listen(port, function () {
  console.log('Server running with port', port);
});
