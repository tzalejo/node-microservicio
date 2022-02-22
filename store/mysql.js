const mysql = require('mysql');

const config = require('./../config');


const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    port: config.mysql.port,
    password: config.mysql.password,
    database: config.mysql.database
}

let conn;

function handleConn(){
console.log(dbconf);
    conn = mysql.createConnection(dbconf);

    conn.connect(err => {
        if (err) {
            console.log('[DB Err]', err);
            setTimeout(handleConn, 2000);
        }else{
            console.log('DB connected!');
        }
    });

    conn.on('error', err => {

        console.log('[DB Err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConn();
        } else {
            throw err;
        }
    })
}

// run la conecion..
handleConn();

function list(table, id ){
    return new Promise((resolve, reject)=>{
        conn.query(`SELECT * FROM ${table}`, (err, data)=> {
            if (err) {
               return reject(err); 
            }
            resolve(data);
        });
    });
}

module.exports= {list,};
