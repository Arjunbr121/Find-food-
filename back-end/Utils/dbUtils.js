const mysql = require('mysql');
require('dotenv').config()

//DB credentials

let connectionObj = {
    "user" : process.env.DB_CREDENTIALS_USER,
    "host":process.env.DB_CREDENTIALS_HOST,

    "password" : process.env.DB_CREDENTIALS_PASSWORD,
    "database" : process.env.DB_CREDENTIALS_DBNAME
}

const create_connection = async () => {
    let connection = null;
    try{
        connection = await mysql.createConnection(connectionObj);
    }catch(e){
        console.log(e)
    }
    return connection;
}

module.exports = create_connection;