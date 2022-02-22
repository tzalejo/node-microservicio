const express = require('express');
const config = require('./../config');

const app = express();

const errors = require('./../network/errors');

const user = require('./components/user/network');
const auth = require('./components/auth/network');
const bodyParser = require('body-parser');

//app.use(bodyParse);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTE
app.use('/api/user', user);
app.use('/api/auth', auth);

app.use(errors); // importante que este al ultimo.

app.listen(config.api.port, () => {
    console.log(`Api escuchando en el puerto ${config.api.port}`);
});

