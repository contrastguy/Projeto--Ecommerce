import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

class Loginfunctions {
    static register = async(req,res) => {
        try {
            const {email,password}= req.body
            const possibleUser = await User.find({email,password}) 
            if(possibleUser){
                res.status(200).send({"Message":"Usuário já foi registrado"})
            }else{
                const newUser = await User.create(req.body)
                newUser.password = undefined
                res.status(201).send({"Message":"Usuário criado com sucesso",newUser})
            }
        } catch (error) {
            res.status(400).send({error:"Erro na lógica da função"})
        }
        
    }

    static Login = async(req,res) => {
        try {
            const {email,password}= req.body
            const user = await User.findOne({email}).select(password)
            if(!user){
                res.send({"Message":"Usuário não existe"})
            }
            const thesame = await bcrypt.compare("password",user.password)
            if(!thesame){
                res.send({"Message":"Credenciais incorretas"})
            }else{
                user.password = undefined
                return res.send({
                    user,
                    token: this.generateToken(user)
                })
            }

        } catch (error) {
            res.status(400).send({error:"Erro na lógica da função"})
        }
    }


    static generateToken(user) {
       return jwt.sign({id: user.id,name: user.name},process.env.API_SECRET,{expiresIn : 86400})
    }
}

export default Loginfunctions