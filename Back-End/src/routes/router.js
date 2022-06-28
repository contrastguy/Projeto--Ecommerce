import express from "express"
import Controllerfunctions from "../controllers/controller.js"

const routes = express.Router()

//mensagem default
routes.get("/",Controllerfunctions.start)

//pega todos os usuários
routes.get("/getall",Controllerfunctions.getAll)

//pega um usuário em específico
routes.get("/user/:id",Controllerfunctions.getById)

//criar um novo usuário
routes.post("/create",Controllerfunctions.createUser)

//atualiza um novo usuário
routes.put("/update/:id",Controllerfunctions.updateUser)

//deleta um novo usuário
routes.delete("/delete/:id",Controllerfunctions.deleteUser)



export default routes