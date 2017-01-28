var express = require('express');
var router = express.Router();
var Scheme = require("./../../db/database");

router.post('/register', function (req, res) {
  Scheme.user.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
  })
      .then(function (data, error) {
          if (!error) {
              res.send(data);
          }  else {
              res.sendStatus(500);
          }
      })
});

module.exports = router;
