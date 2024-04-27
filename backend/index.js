const express = require('express');

const taskroutes = require('../backend/src/routes/taskroutes.js');
const userroutes = require('../backend/src/routes/userroutes.js');

const mongooserequiring = require('./src/db/mongoose.js');
const config = require('../backend/src/config/config.js');

const app=express();

app.use(express.json());

app.use(userroutes);
app.use(taskroutes);

app.listen(config.port,()=>{
    console.log(`Server is up on port ${config.port}`);

});