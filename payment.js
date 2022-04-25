const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    customer_name : {
        type : String,
        required: true
    },
    customer_ID:{
        type: String,
        required:true
    },
    bill_ID:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        required:true
    },
    Item_code:{
        type:String,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Price:{
        type:String,
        required:true
    }
})

const payment = mongoose.model("payment",paymentSchema);

module.exports = payment;