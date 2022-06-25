import Product from "../models/products.js";
import User from "../models/user.js"
import mongoose from "mongoose";


class Controllerfunctions{
    static getAll = async(req,res) => {
    //     const { name,email,password } = req.body;

    // const possibleUser = await User.find({ name,email,password })
    // //a condição do if é True , já esta como padrão
    // if (possibleUser) {
    //     console.log({possibleUser})
    //   return res.status(400).send({ error: "Usuário já cadastrado"})
    // }
    // //else
    // const newuser = await User.create(req.body)
    // user.password = undefined;
    // return res.status(200).send({ newuser })

    const usuario = new User ({
        name:"Matheus",
        email:"matheus@email.com"
    })

    if(usuario){
        const findUsuario = await usuario.~nome da função~()
        return res.status(200).send({findUsuario})
    }else{
        const newuser = await User.create(req.body)
        user.password = undefined;
        return res.status(200).send({ newuser })
    }

  }
   
               
    }


export default Controllerfunctions;