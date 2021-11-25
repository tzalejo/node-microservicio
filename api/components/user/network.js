const express = require('express');
const response = require('./../../../network/response');
const Controller = require('./index');
const router = express.Router();

router.get('/', list);
router.get('/:id', get);
router.post('/', create);
router.put('/:id',update);

// funciones internas
function list(req, res){
    Controller.list()
        .then((list)=>{
            response.sucess(req, res, list, 200);
        })
        .catch((err)=>{
            response.error(req, res, err.message, 500);
        });
}

function get(req, res){
    Controller.get(req.params.id)
        .then((user)=>{
            response.sucess(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
}

function create(req, res){
    Controller.create(req.body)
        .then((user)=>{
            response.sucess(req, res, user, 201);
        })
        .catch((err)=> {
            response.error(req, res, 'Error interno', 500);
        });
    response.sucess(req, res, user, 200);
}

function update(req, res){
    Controller.update(req.params.id, req.body)
        .then((user)=>{
            response.sucess();
        })
        .catch((err)=>{
            response.error();
        });
}

module.exports = router;

