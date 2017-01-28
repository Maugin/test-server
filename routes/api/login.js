var express = require('express');
var router = express.Router();
var Scheme = require("./../../db/database");

router.post('/login', function(req, res) {
    Scheme.user.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
        .then(function (data, error) {
            if (!error) {
                res.sendStatus(200);
            }  else {
                res.sendStatus(404);
            }
        })
});


module.exports = router;

