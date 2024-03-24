const {v4:uuid}=require('uuid');

const userData={
    "users":[
        {
            id:uuid(),
            username:"Kris",
            password:"k1234",
            email:"k123@gmail.com"
        },
        {
            id:uuid(),
            username:"Krishna",
            password:"ka1234",
            email:"ka1234"
        }
    ]
}

module.exports=userData;