const db = require('../database/configuration')
var express = require('express');
var app = express()
var router = express.Router();
app.use(express.urlencoded({ extended: true }));

/* GET users listing. */
router.get("/", function (req, res, next) {
    console.log(db);
    res.render('books',{book : 'Add book'});
});

exports = router;
