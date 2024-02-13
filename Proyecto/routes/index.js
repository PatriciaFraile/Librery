var express = require('express');
var router = express.Router();
const db = require('../database/configuration')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(db);
  res.render('index', { title: 'Express' });
});

module.exports = router;
