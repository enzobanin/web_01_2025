import express from "express";
import { cadastrarProduto, pesquisarProdutoPorId,listaProdutos  } from "./controller/ProductController";

const app = express();
const PORT = process.env.PORT ??3000;
app.use(express.json());

function logInfo(){
    console.log(`API em execucao no URL: http:localhost:${PORT}`);
}

app.post("/api/product", cadastrarProduto);
app.get("/api/product", pesquisarProdutoPorId);
app.get("/api/products", listaProdutos);

app.listen(PORT, logInfo);
