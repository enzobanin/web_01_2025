import express from "express";
import { ProductRepository } from "./repository/ProductRepository";
const repository: ProductRepository = new ProductRepository();
repository.createTable();
const app = express();

const PORT = process.env.PORT ??3000;
app.use(express.json());

function logInfo(){
    console.log(`API em execucao no URL: http:localhost:${PORT}`);
}
repository.insertProduct("camiseta", 20.99);

app.listen(PORT, logInfo);
