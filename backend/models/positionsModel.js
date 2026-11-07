const {model} =require(mongoose);
const {positionsSchema}=require("../schemas/positionsSchema.js");

const positionsModel =new model("position",positionsSchema);

module .exports={positionsModel}