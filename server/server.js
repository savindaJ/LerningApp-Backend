const app = require('../app');
const router = require('../router/router');

const server = app.listen(3001,'127.0.0.1',()=>{
    console.log("server started !");
});

app.use('/api',router);

