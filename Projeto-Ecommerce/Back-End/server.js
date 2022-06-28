//arquivo de configuração do servidor
import app from "./src/app.js";

const port = process.env.PORT || 1313;

app.listen( port,  ()=>{
    console.log("Servidor rodando na porta: " + port)
})

export default app;