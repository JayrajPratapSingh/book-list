const express = require("express");
const router = express.Router();
const mongoose =require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt");


router.get("/", (req, res)=>{
res.send("hello")
})

router.post("/signup",  (req, res)=>{
    const {userName, password, confirmPassword} = req.body;
    if(!userName || !password || !confirmPassword){
        return res.status(422).json({error:"Please Fill all Fields"});
    }
    if(password !== confirmPassword){
        return res.status(422).json({error:"password did not match"})
    }
    USER.findOne({userName:userName}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user is already present"});
        }
    })
    bcrypt.hash(password, 12).then((hashedPassword)=>{
        const  user  = new USER({
            userName,
            password,
            confirmPassword
        })
        user.save().then(user=>{res.json({message:"Registered Sucessfully"})}).catch(err=> console.log(err))
    })
    
})


router.post("/signin", (req, res)=>{
    const {userName, password} = req.body;
    if(!userName || !password){
        return res.status(422).json({error:"Please enter email and password"})
    }
    USER.findOne({userName:userName}).then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid user name"})
        }
        bcrypt.compare(password, savedUser.password).then((match)=>{
            if(match){
                return res.status(200).json({
                    message:"Signed in sucessfully"
                })
            }
            else{
                return res.status(422).json({
                    error:"Invalid Password"
                })
            }
        }).catch(err=>console.log(err));
    })
})

module.exports = router;