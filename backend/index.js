const express = require(`express`);

const taskrouter = require('../backend/src/routes/taskroutes.js');
const userrouter = require('../backend/src/routes/userroutes.js');
const config = require('../backend/src/config/config.js');

const mongooserequiring = require('./src/db/db.js');

const app=express();
//const port = process.env.PORT;

app.use(express.json());

app.use(userrouter);
app.use(taskrouter);



app.listen(config.port,()=>{
    console.log(`Server is up on port ${config.port}`);

});

