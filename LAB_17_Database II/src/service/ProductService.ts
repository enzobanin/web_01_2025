import { Product } from "../model/Product"
import { ProductRepository } from "../repository/ProductRepository"
export class ProductService{
    productRepository : ProductRepository = ProductRepository.getInstance();

    createProduct(data:any):Promise<Product>{
        if(!data.name || !data.price){
            throw new Error('Favor informar os campos obrigatórios');
        }
        return this.productRepository.insertProduct(data.name,data.price);
    }
}