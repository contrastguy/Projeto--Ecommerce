import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/Products&Users")

const ProductsUsers = mongoose.connection

export default ProductsUsers

