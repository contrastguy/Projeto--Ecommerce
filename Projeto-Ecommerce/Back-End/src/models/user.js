import mongoose from "mongoose"

//define o schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }


})

//compila o modelo
const User = mongoose.model("User",UserSchema);


export default User