// const { default: mongoose } = require("mongoose");

const {schema} =require(mongoose);
const holdingsSchema = new Schema({
    name: String,
    qty: Number,
    avg:  Number,
    price:  Number,
    net: String,
    day: String,
    isLoss:Boolean
    

});
module.exports={holdingsSchema};