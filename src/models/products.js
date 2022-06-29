import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }

})

 const Product = mongoose.model("Product",ProductSchema);

export default Product