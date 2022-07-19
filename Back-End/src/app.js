//arquivo de configuração da aplicação
import express from "express";
import  ProductsUsers from "./config/ProductsUsers.js";
import dotenv from "dotenv-safe"
import router from "./routes/router.js"
import cors from "cors"

dotenv.config()

const app = express()
app.use(express.json())
//o CORS precisa ser instalado, para fazer a segurança de outras requests de sites suspeitos
app.use(cors())

ProductsUsers.on("open",() => {console.log("Conexão com o banco de produtos e usuários feita com sucesso")})
ProductsUsers.on("error",() => {console.log("Conexão mal sucedida")})

app.use("/root",router)

export default app;