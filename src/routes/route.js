const express = require('express');
const externalModule = require('./logger/logger')
const externalModule1 = require('./Util/helper')
const externalModule2 = require('./Validator/formatter')


const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    externalModule1.a()
    externalModule1.b()
    externalModule1.c()
    externalModule2.d()


    res.send('My first ever api!')
});



module.exports = router;
// adding this comment for no reason