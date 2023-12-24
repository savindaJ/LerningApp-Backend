const modal = require('../modal/user');

const getAllUser = (req,res)=>{
    console.log("get !");
    modal.getAllUser(req,res)
}

const addUser = (req,res)=>{
    console.log("post !");
    modal.insertUser(req,res);
}

const updateUser = (req,res)=>{
    console.log("put !" , req.body);
    modal.updateUser(req,res);
    // modal.deleteUser(req,res);
}

const deleteUser = (req,res)=>{
    modal.deleteUser(req,res);
}

exports.getAllUser = getAllUser;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;