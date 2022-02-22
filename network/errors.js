const response = require('./response');

function errors(err, req, res, next){
    console.log('[Error]', err);

    const message = err.message || 'Error interno';
    const sttuts = err.sttuts || 500;

    response.error(req, res, message, status)
}

module.exports = errors;


