const mongoose =require("mongoose");

const emitterSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    accountId:{
        type:String,
        unique: true,
        required:true
    },
    description:{
        type:String,
        required:true
        // required:[false,"Description must be provided"]
    },
    email:{
        type: String,
        required:true
        // required:[false,"Please enter your email for registration"]
    },
    isEmitter:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        default:Date.now(),
    },
    
});

module.exports=mongoose.model("Emitter", emitterSchema);