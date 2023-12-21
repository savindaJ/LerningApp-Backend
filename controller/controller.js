const connection = require('../db/connection')

const getAllUser = (req,res)=>{
    console.log("get !");
    res.json({massage:"getAll"})
}

const addUser = (req,res)=>{
    console.log("post !");
    res.json({massage:"insert user"})
}

const updateUser = (req,res)=>{
    console.log("put !");
    res.json({massage:"update user"})
}

const deleteUser = (req,res)=>{
    console.log("delete !");
    res.json({massage:"delete user"})
}

exports.getAllUser = getAllUser;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;