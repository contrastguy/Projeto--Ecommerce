//arquivo de configuração da aplicação
import express from "express";
import  ProductsUsers from "./config/ProductsUsers.js";
import dotenv from "dotenv-safe"
import router from "./routes/router.js"

dotenv.config()

const app = express()
app.use(express.json())

ProductsUsers.on("open",() => {console.log("Conexão com o banco de produtos e usuários feita com sucesso")})
ProductsUsers.on("error",() => {console.log("Conexão mal sucedida")})

app.use("/root",router)

export default app;