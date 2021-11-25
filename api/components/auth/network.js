const express = require('express');
const response = require('./../../../network/response');
const Controller = require('./index');
const router = express.Router();

router.post('/login',register);

function register(req, res){
    Controller.login(req.body.username, req.body.password)
        .then(token => {
            console.log(token);
            response.sucess(req, res, token, 200);
        })
        .catch(err => {
            response.error(req,res, err.message ,400);
        });
}

module.exports = router;


