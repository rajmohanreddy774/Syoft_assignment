const mongoose =require('mongoose')

const Product=new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    pass:{ type:String, required:true},
    
},
{
    collection:"product-data"
})

const model= mongoose.model("productData",Product)

module.exports=model;