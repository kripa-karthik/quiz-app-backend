const express=require('express');
const quizRouter=express.Router();
const quizzes=require('../db/quizes');
const authVerify=require('../middleware/authverify')

quizRouter.route("/").get(authVerify,(req,res=>{
    res.json(quizzes);
}))

module.exports=quizRouter;   