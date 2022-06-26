import express from "express"
import Controllerfunctions from "../controllers/controller.js"

const routes = express.Router()

//pega todos os usuários
routes.get("/getall",Controllerfunctions.getAll)

//criar um novo usuário
routes.post("/create",Controllerfunctions.createUser)

//atualiza um novo usuário
routes.put("/update",Controllerfunctions.updateUser)

//deleta um novo usuário
routes.delete("/delete",Controllerfunctions.deleteUser)



export default routes