const {v4:uuid}=require('uuid');

const userData={
    "users":[
        {
            id:uuid(),
            userName:"Kris",
            password:"k1234",
            email:"k123@gmail.com"
        },
        {
            id:uuid(),
            userName:"Krishna",
            password:"ka1234",
            email:"ka1234"
        }
    ]
}

module.exports=userData;