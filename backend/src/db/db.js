const mongoose = require("mongoose");
mongoose.connect(process.env.MOGODB_URL,{
    useNewUrlParser: true ,
    useCreateIndex : true ,
    useUnifiedTopology : true,
});