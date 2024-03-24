const userData=require('../db/users')
const jwt=require('jsonwebtoken');
const {v4:uuid}=require('uuid');


const signupHndler=(req,res)=>{
    const {username,password}=req.body;
    const isUserPresent=userData.users.some(user=>user.username===username);
    if(isUserPresent){
        res.status(422).json({message:"User already exists"})
    }else{
        const id=uuid();
        const newUser={id,username,password};
        userData.users=[...userData.users,newUser];
        const token=jwt.sign({id:username},process.env.SECRET_TOKEN);
        res.json({message:`success-created new user-->${username}::${token}`})
    }
}

const loginHandler=(req,res)=>{
    const {username,password}=req.body;
    const isUserVerified=userData.users.some(user=>user.username===username && user.password===password);
    if(isUserVerified){
        const token=jwt.sign({id:username},process.env.SECRET_TOKEN)
        res.json({username,token,message:"user verified"})
    }
    else{
        res.status(401).json({message:"invalid credential"})
    }
}

module.exports={loginHandler,signupHndler};;