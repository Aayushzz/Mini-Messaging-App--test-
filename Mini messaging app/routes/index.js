
var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi There!",
    user: "Mad Zonesss",
    added: new Date()
  }, 
  {
    text: "Hello World",
    user: "Aayushzz",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini MessageBoard', messages});
});

router.get('/new', (req, res, next) => {
  res.render('form')
})

router.post('/new', (req, res, next) => {
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  }

  messages.push(newMessage);
  res.redirect('/');
})

module.exports = router;
