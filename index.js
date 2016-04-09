'use strict';

var
  express = require('express'),
  app = express(),
  parser = require('body-parser'),
  PORT = process.env.PORT;

app.use(parser.json());

app.get('/', function (req, res, next) {
  res.json({
    error: null,
    result: {
      message: "Welcome!!",
      number: 472184,
      numberlist: [
        1, 2, 3,
      ],
      stringlist: [
        "this", "is", "a", "pen"
      ],
    },
  });
  return next();
});

app.get('/ping', function (req, res, next) {
  res.json('PONG');
  return next();
});

app.get('/notfound', function (req, res, next) {
  res.status(404).json('NotFound');
  return next();
});

app.post('/badrequest', function (req, res, next) {
  res.status(400).json('BadRequest');
  return next();
})

app.listen(PORT, function () {
  console.log('Server running with port', PORT);
});