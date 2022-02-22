const jwt = require('jsonwebtoken');
const config = require('./../config');

const err = require('./../utils/errors');

const secretGenerate = config.jwt.secret

function sign(data){
    return jwt.sign(data, secretGenerate);
}

function getToken(auth){
    if(!auth){
        throw err('No tiene token', 402);
    }

    if(auth.indexOf('Bearer ')=== -1){
        throw err('Formato invalido', 400);
    }

    let token = auth.replace('Bearer ', '');

    return token;
}

function verify(token){
    return jwt.verify(token, secretGenerate);
}

function decodeHeader(req){
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);
    req.user = decoded;

    return decoded;
}

const check = {
    own: function(req, owner){
        //
        const decoded= decodeHeader(req);
        console.log('Decoded', decoded);

        // comprobamos si es o no propio
        if (decoded.id !== owner) {
            throw err('No puedes hacer esto', 401);
        }
    }
}
module.exports = {
    sign,
    check,
}
