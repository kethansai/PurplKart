const router = require('express').Router();
const User = require('../models/User');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');



//REGISTER
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : CryptoJs.AES.encrypt(req.body.password,process.env.SECRET_PHRASE).toString(),
    });
    
    try{
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
    }catch(err){
        console.log(err.message);
        res.status(500).json(err);
    }
})

router.post("/login",async (req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username});
        !user && res.status(401).json("No User found!");

        const hashPwd = CryptoJs.AES.decrypt(user.password,process.env.SECRET_PHRASE);
        const pwd = hashPwd.toString(CryptoJs.enc.Utf8);
        pwd !== req.body.password && 
            res.status(401).json("Wrong Password");

            const accessToken = jwt.sign(
                {
                    id:user._id,
                    isAdmin:user.isAdmin
                },
                process.env.JWT_PHRASE,
                {expiresIn:"3d"}
            );
        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;