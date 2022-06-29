import Product from "../models/products.js";
import User from "../models/user.js"
import mongoose from "mongoose";


class Controllerfunctions {


  static start = (req,res) => {
    res.status(200).send({"Message":"Olá , seja bem vindo!"})
  }

  static getAllUsers = async(req, res) => {
    try {
      //o all é uma variável em que "procura" todo o objeto simplesmente pelo {}
      let all = await User.find({})
      res.status(200).send({all})
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
        let newuser =new User({
          "name":reqname,
          "email":reqemail,
          "password":reqpassword
        })

        //peguei o objeto que eu criei aqui em cima , e usei a função de salvar
        //depois eu usei o .then , porque é uma promisse
        newuser.save().then((data) => {
          res.send({"Message":"Usuário criado com sucesso",data})
        })
       
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
      let find = await User.findByIdAndUpdate(reqid,req.body)
      res.send({"Message":"Tudo certo!",find})
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


  static getAllProducts = async(req,res) =>{
    try {
      //o all é uma variável em que "procura" todo o objeto simplesmente pelo {}
      let allProducts = await Product.find({})
      res.status(200).send({allProducts})
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: "Erro com a lógica da função" })
    }

  }


  static getProductById = async(req,res) => {
    try {
      const reqid = req.params.id
      const findProducts = await Product.findById(reqid).exec()
      res.status(200).send({findProducts})
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: "Erro com a lógica da função" })
    }
  }

  static createProduct = (req,res) => {
    try {
      const reqprice = req.body.price
      const reqcategory = req.body.category
      const reqsize = req.body.size
      const reqquantity = req.body.quantity
      const reqname = req.body.name

      //se os dados que você colocou na requisição são condizentes à variável
      if(reqprice && reqcategory && reqsize && reqquantity && reqname){
        let newProduct =new Product({
          "price":reqprice,
          "category":reqcategory,
          "size":reqsize,
          "quantity":reqquantity,
          "name":reqname
        })

        //peguei o objeto que eu criei aqui em cima , e usei a função de salvar
        //depois eu usei o .then , porque é uma promisse , pra pegar os dados e jogar na response
        newProduct.save().then((data) => {
          res.send({"Message":"Usuário criado com sucesso",data})
        })
      }
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: "Erro com a lógica da função" })
    }
  }

  static  updateProduct = async(req,res) => {
    try {
      const reqid = req.params.id
      
      //verificar se o id que o cliente colocou é igual ao da propriedade do objeto
      let findProduct = await Product.findByIdAndUpdate(reqid,req.body)
      res.send({"Message":"Tudo certo!",findProduct})
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: "Erro com a lógica da função" })
    }
  }

  static deleteProduct = async(req,res) => {
    try {
      const RemoveProduct = await Product.findByIdAndDelete(req.params.id)
      res.send({RemoveProduct})
  } catch (error) {
    console.log(error)
    res.status(400).send({ error: "Erro com a lógica da função" })
  }
  }
 
}


export default Controllerfunctions;
