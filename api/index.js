const express = require('express');
const config = require('./../config');

const app = express();

const user = require('./components/user/network');

//ROUTE
app.use('/', user);

app.listen(config.api.port, () => {
    console.log(`Api escuchando en el puerto ${config.api.port}`);
});

