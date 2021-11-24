const express = require('express');
const response = require('./../../../network/response');
const Controller = require('./index');
const router = express.Router();

router.get('/', function(req, res){
    const list = Controller.list();
    response.sucess(req, res, list, 200);
});

router.get('/:id', function(req, res){
    const user = Controller.get(req.params.id);
    response.sucess(req, res, user, 200);
});

router.post('/', function(req, res){
    const user = Controller.create(req.body);
    response.sucess(req, res, user, 200);
});

module.exports = router;

