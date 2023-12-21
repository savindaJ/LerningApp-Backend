const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('/controller/controller')

app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users',(req,res)=>{
    controller.getAllUser(req,res,(callback)=>{

    });
});

app.post('/createuser',(req,res)=>{
    controller.addUser(req,res,(callback)=>{

    });
});

app.put('/updateuser',(req,res)=>{
    controller.updateUser(req,res,(callback)=>{

    });
});

app.delete('/deleteuser',(req,res)=>{
    controller.deleteUser(req,res,(callback)=>{

    });
});

module.exports = app;