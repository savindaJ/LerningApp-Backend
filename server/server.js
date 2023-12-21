const app = require('../app');
const con = require('../db/connection')

const server = app.listen(3001,'127.0.0.1',()=>{
    console.log("server started !");
});

