const modal = require('../modal/user');

const getAllUser = (req,res)=>{
    console.log("get !");
    res.json({massage:"getAll"})
}

const addUser = (req,res)=>{
    console.log("post !");
    modal.insertUser(req,res);
}

const updateUser = (req,res)=>{
    console.log("put !");
    modal.updateUser(req,res);
}

const deleteUser = (req,res)=>{
    console.log("delete !");
    res.json({massage:"delete user"})
}

exports.getAllUser = getAllUser;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;