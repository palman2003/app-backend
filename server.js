const express=require('express');
require('dotenv').config();
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
const user=require('./routes/user');
const mongoose=require("mongoose");
const app=express();

//express middleware
app.use(express.json());

//moongose connection to database
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //app listening to the requests
        app.listen(process.env.PORT,()=>{
        console.log('listening to port 4000');
        })
    })
    .catch((error)=>{
        console.log("error");
    })

//route configuration for user login
app.use('/v1/api',user);

//route configuration for password reset
//app.use('/v1/api/reset',quiz);




