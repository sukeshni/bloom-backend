var
  express = require('express'),
  router = express.Router();

router.get('/', function (req, res, next) {
  res.json(["organizations"]);
  return next();
});

module.exports = router;
