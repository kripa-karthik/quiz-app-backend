const express=require('express');
const {loginHandler,signupHndler}=require('../controller/authController');

const loginRouter=express.Router();
const signupRouter=express.Router();


loginRouter.route('/').post(loginHandler);
signupRouter.route('/').post(signupHndler);

module.exports={loginRouter,signupRouter};

