const mongoose=require('mongoose');

const schema=mongoose.Schema;

const contentSchema = new schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:false
    },
    body:{
        type:String,
        required:false
    }
},{timestamps:true});

module.exports=mongoose.model('content',contentSchema);