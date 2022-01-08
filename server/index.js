import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from "body-parser";

import itemRoutes from './routes/items.js';

const app = express();

app.use('/items',itemRoutes);

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


const CONNECTION_URL = "mongodb+srv://purplthings:PurplThings123@cluster0.avcv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true}).then((res)=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port : http://localhost:${PORT}`);
    })
}).catch((err)=>{
    console.log(err.message);
})

// mongoose.set('useFindAndModify',false);