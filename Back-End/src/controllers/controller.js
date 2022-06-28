import Product from "../models/products.js";
import User from "../models/user.js"
import mongoose from "mongoose";


class Controllerfunctions {


  static start = (req,res) => {
    res.status(200).send({"Message":"Olá , seja bem vindo!"})
  }

  static getAll = (req, res) => {
    try {
      res.send([User])

    } catch (error) {
      console.log(error)
      res.status(400).send({ error: "Erro com a lógica da função" })
    }


  }

  static getById = async(req,res) => {
    try {
      const reqid = req.params.id
      const find = await User.findById(reqid).exec()
      res.status(200).send({find})
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: "Erro com a lógica da função" })
    }
  }




  static createUser = (req, res) => {
    try {
      const reqname = req.body.name
      const reqemail = req.body.email
      const reqpassword = req.body.password

      if(reqname && reqemail && reqpassword){
        let newuser = {
          "name":reqname,
          "email":reqemail,
          "password":reqpassword
        }

         User.push(newuser) // não ta funcionando usar essas funções na array do objeto
         return res.send({"Message":"Alterado"},[findid])
        res.send({"Message":"Usuário criado com sucesso",User})
      }


    } catch (error) {
      console.log(error)
      res.status(400).send({ error: "Erro com a lógica da função" })
    }
  }



  static updateUser = async (req, res) => {
    try {
      const reqid = req.params.id
      //verificar se o id que o cliente colocou é igual ao da propriedade do objeto
      let find = User.find( () => User._id == reqid)

      let name = req.body.name
      let email = req.body.email
      let password = req.body.password
      
      if(name && email && password){
        let idreq = req.params.id
        let findid =  User.map(() => User._id == idreq) // não ta funcionando usar essas funções na array do objeto
        return res.send({"Message":"Alterado"},[findid]) 
      }
      

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