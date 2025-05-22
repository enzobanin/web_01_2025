import { PessoaService } from "../service/PessoaService";
import { Request, Response } from "express";

export class PessoaController{
    private pessoaService = new PessoaService()

    criarPessoa(req:Request, res:Response):void{
        try{
            const pessoa = this.pessoaService.novaPessoa(req.body)
            res.status(201).json(pessoa)
        }catch(error: unknown){
            let message: string = "Não foi possível criar o registro!!"
            if( error instanceof Error){
                message = error.message
            }
            res.status(400).json({
                message: message
            })
        }
    }


}