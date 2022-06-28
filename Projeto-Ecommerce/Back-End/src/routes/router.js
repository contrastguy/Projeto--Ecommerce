import express from "express"
import Controllerfunctions from "../controllers/controller.js"

const routes = express.Router()

//mensagem default
routes.get("/",Controllerfunctions.start)

//pega todos os usuários
routes.get("/getall",Controllerfunctions.getAllUsers)

//pega um usuário em específico
routes.get("/user/:id",Controllerfunctions.getById)

//criar um novo usuário
routes.post("/create",Controllerfunctions.createUser)

//atualiza um novo usuário
routes.put("/update/:id",Controllerfunctions.updateUser)

//deleta um usuário
routes.delete("/delete/:id",Controllerfunctions.deleteUser)

//pega todos os produtos
routes.get("/getallProducts",Controllerfunctions.getAllProducts)

//pega um produto em específico
routes.get("/product/:id",Controllerfunctions.getProductById)

//cria um novo produto
routes.post("/createProduct",Controllerfunctions.createProduct)

//atualiza um novo produto
routes.put("/updateProduct/:id",Controllerfunctions.updateProduct)

//deleta um produto
routes.delete("/deleteProduct/:id",Controllerfunctions.deleteProduct)



export default routes
