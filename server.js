const express=require('express');
require('dotenv').config();
const content=require('./routes/content');
const quiz=require('./routes/quiz')
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

//route configuration for content
app.use('/v1/api/content',content);

//route configuration for quiz
app.use('/v1/api/quiz',quiz);


