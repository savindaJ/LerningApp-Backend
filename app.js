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

});

app.put('/updateuser',(req,res)=>{

});

app.delete('/deleteuser',(req,res)=>{

});

module.exports = app;