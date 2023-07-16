const util = require('util')
const dbconnection = require('../Utils/dbUtils.js')

const findOneUser = async (username, email) => {
    let connection = await dbconnection();
    const query = util.promisify(connection.query).bind(connection);
    let user = null;
    if(query){
       user = await query(`SELECT * FROM customer where name = '${username}' and email = '${email}'`);
    }
    return user;
}

module.exports = {findOneUser};