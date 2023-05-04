const mysql = require('mysql');
const util = require('util')

require('dotenv').config()

//DB credentials

let connectionObj = {
    "user" : process.env.DB_CREDENTIALS_USER,
    "host":process.env.DB_CREDENTIALS_HOST,

    "password" : process.env.DB_CREDENTIALS_PASSWORD,
    "database" : process.env.DB_CREDENTIALS_DBNAME
}

const create_connection = async () =>{
    try{
        const connection = await mysql.createConnection(connectionObj);
        const query = util.promisify(connection.query).bind(connection);
        console.log(typeof(query));
        return query;
    }catch(e){
        console.log(e)
    }
    return null
}

const findOneUser = async (username, email) => {
    let connectionQuery = await create_connection();
    let user = null;
    if(connectionQuery){
       user = await connectionQuery(`SELECT * FROM customer where name = '${username}' and email = '${email}'`);
    }
    return user;
}

module.exports = {findOneUser};