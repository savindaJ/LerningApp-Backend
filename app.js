const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller/controller')

app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users',(req,res)=>{
    controller.getAllUser(req,res,(callback)=>{
        res.json({massage:"ok"})
    });
});

app.post('/createuser',(req,res)=>{
    controller.addUser(req,res,(callback)=>{
        res.json({massage:"ok"})
    });
});

app.put('/updateuser',(req,res)=>{
    controller.updateUser(req,res,(callback)=>{
        res.json({massage:"ok"})
    });
});

app.put('/deleteuser',(req,res)=>{
    controller.deleteUser(req,res);
});

module.exports = app;