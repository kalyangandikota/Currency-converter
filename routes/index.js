var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res){
  console.log('gng in')
  res.render('users', {title: 'Users'})
})

module.exports = router;
