import express from "express"
import Controllerfunctions from "../controllers/controller.js"

const routes = express.Router()

//getallUsers
routes.get("/getallUsers",Controllerfunctions.getAll)

export default routes