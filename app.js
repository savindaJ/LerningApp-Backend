const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users',(req,res)=>{

});

app.post('/createuser',(req,res)=>{

});

app.put('/updateuser',(req,res)=>{

});

app.delete('/deleteuser',(req,res)=>{

});

module.exports = app;