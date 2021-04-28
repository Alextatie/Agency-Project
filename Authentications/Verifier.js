const { check } = require('express-validator')
const repo = require('../Models/usersDB')


module.exports = {

    validateEmail: check('email')
        .custom(async (email) => {
            const existingUser =
                await repo.findOne({"userEmail":email})

            if (existingUser) {
                throw new Error('Email is already in use.')
            }
        }),
        validatePassword: check('email')
         .custom(async(user,{req})  =>{
         const existingUser = await repo.findOne({'userEmail':req.body.email})
           if(!existingUser)
           {
             throw new Error("Email is not Registered.")
           }
           console.log(existingUser);
           if (existingUser['userPassword'].localeCompare(req.body.password)){
             console.log("Fetched from DB:",existingUser['userPassword']);
             console.log('inserted:',req.body.password);
             throw new Error("Password is incorrect, please try Again.");
           }
         })
       }
