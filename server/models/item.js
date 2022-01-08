import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    img:[String],
    title:String,
    description:String,
    price:Number,
    message:String,
    offerPercent:{
        type:Number,
        default:0
    },
    rating:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    category:String,
    addedAt: {
        type:Date,
        default: new Date()
    }
})

const item = mongoose.model('itemSchema',itemSchema);

export default item;