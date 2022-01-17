const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');


const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Sucessfull")).catch((err)=>console.log(err));

app.use("/api/auth" , authRoute);
app.use("/api/register" , userRoute);

app.listen(process.env.PORT || 5000,()=>{
    console.log("Your Server Running on PORT:5000");
})