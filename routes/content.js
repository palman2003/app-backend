const express=require('express');

const router=express.Router();

const content=require("../models/contentmodel");

router.get('/fetch',async(req,res)=>{
    try{
        const contents=await content.find();
        res.json(contents) 
    }

    catch(error){
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports=router
 