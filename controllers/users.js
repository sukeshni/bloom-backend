var
  express = require('express'),
  router = express.Router();

router.get('/', function (req, res, next) {
  res.json(["users"]);
  return next();
});

module.exports = router;
