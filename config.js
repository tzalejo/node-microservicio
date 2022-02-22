
module.exports = {
    api: {
        port: process.env.API_PORT || 3007,
    },

    jwt:{
        secret: process.env.JWT_SECRET || 'secret123456!',
    }
}
