import express from "express"
import { PessoaController } from "./controller/PessoaController"

const pessoaController = new PessoaController()

const app = express()

const PORT = process.env.PORT ?? 3000
app.use(express.json())

app.post("/api/pessoa", pessoaController.criarPessoa.bind(pessoaController))

app.listen(PORT, () => console.log("Servidor rodando em http://localhost:3000"))