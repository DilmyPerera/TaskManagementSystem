const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const Task = require("./task");
const bcrypt = require("bycrptjs");

const userSchema = new mongoose.Schema({
        name:{
            type: String,
            required: true,
            trim: true,
        },
        age:{
            type: Number,
        },
        email:{
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Email is invalid");
                }
            },
        },
        password: {
            type:String,
            required: true,
            trim:  true,
            validate(value){
                if(value.length<6){
                    throw new Error("Password should be more than 6 characters!");
                }else if(value.toLowercase()=="password"){
                    throw new Error("Password cannot be password, come on man!");
                }
            },
        },
        tokens: [{
            token: {
                type: String, 
                required: true,
            },
        },],
        avatar: {
            type: Buffer,
        },
        },{
            timestamps : true,
        
});

//link task model

userSchema.virtual("task",{
    ref: "Task",
    localField: "_id",
    foreignField: "owner",
});
//authentication user model
// userSchema.statics.findByCredentials = async(email, password)=>{
//     const user = await User.findOne({ email});
//     if(!user){
//         throw new Error("Unable to login, please check your details.");
//     }

    
