exports.sucess = function(req, res, msg, status){
    let statusCode = status || 200;
    let statusMsg = msg || '';

    res.status(status).send({
        error: false,
        status: status, 
        body: statusMsg,
    });
}

exports.error= function(req, res, msg, status){
    let statusCode = status || 500;
    let statusMsg = msg || 'Internal server error';
    res.status(statusCode).send({
        error: false,
        status: status,
        body: statusMsg,
    });

}
