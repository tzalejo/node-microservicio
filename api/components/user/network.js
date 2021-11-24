const express = require('express');
const response = require('./../../../network/response');
const Controller = require('./controller');
const router = express.Router();


router.get('/', function(req, res){
    const list = Controller.list();
    response.sucess(req, res, list, 200);
});

module.exports = router;

