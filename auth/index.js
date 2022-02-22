const jwt = require('jsonwebtoken');
const config = require('./../config');

const secretGenerate = config.jwt.secret

function sign(data){
    return jwt.sign(data, secretGenerate);
}

function getToken(auth){
    if(!auth){
        throw new Error('No viene token');
    }

    if(auth.indexOf('Bearer ')=== -1){
        throw new Error('Formato invalido');
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
            throw new Error('No puedes hacer esto');
        }
    }
}
module.exports = {
    sign,
    check,
}
