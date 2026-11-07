const {schema} =require(mongoose);
const positionsSchema = new Schema({
    
    name: String,
    qty: Number,
    
    price: Number,
    mode:String
    
    });
module.exports={positionsSchema}