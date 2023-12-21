const connection = require('../db/connection')
function insertUser(){
    return {massage:"inserting a User !"}
}

module.exports.insertUser = insertUser;