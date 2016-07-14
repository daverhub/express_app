var express = require('express');
var router = express.Router();
var videodata = require('../videodata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var express= require('express');
var router = express.Router();

router.get('/', function (req, res, next){
  res.render('index', {
    title: 'Express',
    name: 'David',
    videodata: videodata,
    url: 'https://thenewboston.com/videos_food.php?cat='
  });
});

module.exports = router;
