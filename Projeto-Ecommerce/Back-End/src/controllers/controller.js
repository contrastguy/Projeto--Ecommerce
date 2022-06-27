import Product from "../models/products.js";
import User from "../models/user.js"
import mongoose from "mongoose";


class Controllerfunctions {
  static getAll = async (req, res) => {
    try {

      const { name, email, password } = req.body

      const possibleUser = await User.find({ name, email, password }).populate("User")
      //a condição do if é True , já esta como padrão
      if (possibleUser) {

        return res.status(200).send([{ error: "Usuário já cadastrado" }, { possibleUser }])
      }
      //else
      const newuser = await User.create(req.body)
      User.password = undefined;
      return res.status(200).send({ newuser })

    } catch (error) {

      res.status(400).send({ error: "Erro com a lógica da função" })
    }


  }

  static getById = async(req,res) => {
    try {
      
      const reqid = req.params.id
    
      const find = await User.findById(reqid)
      res.send(find)
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: "Erro com a lógica da função" })
    }
  }




  static createUser = (req, res) => {
    try {
      let newuser =new User({
        name: User.name,
        email: User.email,
        password: User.password
      })


      res.status(201).send([{ Message: "Usuário criado" },{ newuser }])
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: "Erro com a lógica da função" })
    }
  }



  static updateUser = async (req, res) => {
    try {
      const id = (req.params.id)
      const user = (req.body)

    } catch (error) {
      console.log(error)
      res.status(400).send({ error: "Erro com a lógica da função" })
    }
  }


  static deleteUser = async (req, res) => {
    try {
        const Remove = await User.findByIdAndDelete(req.params.id)
        res.send({Remove})
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: "Erro com a lógica da função" })
    }
  }



}


export default Controllerfunctions;
