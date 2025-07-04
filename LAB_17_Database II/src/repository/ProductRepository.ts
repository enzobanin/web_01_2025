import { exec } from "child_process";
import { executarComandoSQL } from "../database/mysql";
import { Product } from "../model/Product";
import { resourceLimits } from "worker_threads";

export class ProductRepository {
    private static instance : ProductRepository ;
    private productList : Product [] = [];

    private constructor () {
        this.createTable();
    }

    static getInstance():ProductRepository{
    if (!this.instance ){
        this.instance = new ProductRepository () ;
    }
    return this.instance ;
    }

    imprimeResult(err:any, result:any){
        if(result!=undefined){
            console.log("Dentro callback", result);
        }
    }
    private async createTable(){
        const query = `CREATE TABLE IF NOT EXISTS Vendas.Product(
        id INT AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10,2)NOT NULL
        )`;
        try{
            const resultado = await executarComandoSQL(query, []);
            console.log('Tabela Product criada com sucesso', resultado)
        }catch(err){
            console.error('Erro ao criar a tabela Product', err);
        }
    }
    async insertProduct(name:string, price:number):Promise<Product>{
       const resultado = await executarComandoSQL(
        "INSERT INTO Vendas.Product (name, price) VALUES (?,?)",
        [name, price] 
       );
       console.log('Produto inserido com sucesso:', resultado);
       return new Product(resultado.insertId,name,price);
    }

}