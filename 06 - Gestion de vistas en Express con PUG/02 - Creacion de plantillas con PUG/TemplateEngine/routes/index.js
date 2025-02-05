var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    name: 'Alberto',
    avaiable:false,
    animales: ['perro','gato','cuervo','tortuga'] 
  });
});

module.exports = router;
