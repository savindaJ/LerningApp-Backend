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
    console.log("put !");
    modal.updateUser(req,res);
}

const deleteUser = (req,res)=>{
    console.log("call controller body",req.body)
    res.json({massage:"ok"})
    // modal.deleteUser(req,res);
}

exports.getAllUser = getAllUser;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;