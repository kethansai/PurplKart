const jwt = require('jsonwebtoken');


// verifyToken
const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_PHRASE,(err,user)=>{
            if(err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    }else{
        return res.status(401).json("You're Not Authenticated!");
    }
}

// verifyTokenAndAuthorization
const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin ){
            next()
        }else{
            res.status(403).json("You're not allowed to do that!");
        }
    })
}

//verifyTokenAndAdmin
const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You're not allowed to do that!");
        }
    })
}

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
};