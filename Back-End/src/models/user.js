import mongoose from "mongoose"
import bcrypt from "bcryptjs"

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

// o .pre significa que antes do objeto ser salvo , vai acontecer essa função assíncrona no segundo parâmetro.
// A função gera um hash na password 
// o next() é um método usado  para com que o computador leia e passe para a próxima tarefa
UserSchema.pre("save", async(next) => {
    //cria o hash na password
    const hash = await bcrypt.hash(this.password,10)
    //pega a password do Schema e atribui o valor da variável hash
    this.password = hash
    //depois de ler os dois códigos acima , de forma assíncrona , passa para a próxima leitura de forma síncrona
    next()
})

//É importante colocar essa função antes, porque quando compilar o modelo, essa função já vai estar estruturada

//compila o modelo
const User = mongoose.model("User",UserSchema);


export default User