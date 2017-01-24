var express = require('express');
var router = express.Router();

// var clientlogger = require('client-logger')(router,log);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
