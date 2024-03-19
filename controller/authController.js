const userData=require('../db/users')
const jwt=require('jsonwebtoken');
const {v4:uuid}=require('uuid');


const signupHndler=(req,res)=>{
    const {userName,password}=req.body;
    const isUserPresent=userData.users.some(user=>user.userName===userName);
    if(isUserPresent){
        res.status(422).json({message:"User already exists"})
    }else{
        const id=uuid();
        const newUser={id,userName,password};
        userData.users=[...userData.users,newUser];
        const token=jwt.sign({id:userName},process.env.SECRET_TOKEN);
        res.json({message:`success-created new user-->${userName}::${token}`})
    }
}

const loginHandler=(req,res)=>{
    const {userName,password}=req.body;
    const isUserVerified=userData.users.some(user=>user.userName===userName && user.password===password);
    if(isUserVerified){
        const token=jwt.sign({id:userName},process.env.SECRET_TOKEN)
        res.json({userName,token,message:"user verified"})
    }
    else{
        res.status(401).json({message:"invalid credential"})
    }
}

module.exports={loginHandler,signupHndler};;