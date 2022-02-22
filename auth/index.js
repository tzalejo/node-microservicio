const jwt = require('jsonwebtoken');
const tokeGenerate='jañlsdfujiasfndmañsldkjfalksdf';

function sign(data){
    return jwt.sign(data, 'secreto');
}

module.exports ={
    sign,
}
