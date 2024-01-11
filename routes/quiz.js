const express=require('express');

const router=express.Router();

const fetchQuestion=require("../models/quizmodel");

router.get("/questions",async (req,res)=>{
    fetchQuestion()
    .then(questionArray => {
      res.json(questionArray);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });



module.exports=router