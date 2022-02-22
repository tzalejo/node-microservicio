
module.exports = {
    api: {
        port: process.env.API_PORT || 3007,
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'secret123456!',
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: 'admin',
        // user: process.env.USER || 'admin',
        password: process.env.PASSWORD || 'admin',
        database: process.env.MYSQL_DB || 'nodemicro',
        port: process.env.MYSQL_PORT || 5309,
    }
    
}
