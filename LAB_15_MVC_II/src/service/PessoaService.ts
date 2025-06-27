import { PessoaEntity } from "../model/PessoaEntity";
import { PessoaRepository } from "../repository/PessoaRepository";

export class PessoaService{
    private pessoaRepository = PessoaRepository.getInstance()

    novaPessoa( data:any): PessoaEntity{
        if(!data.nome || !data.idade || !data.email){
            throw new Error("Favor informar todos os campos")
        }
        const idade = parseInt(data.idade,10)
        const pessoa = new PessoaEntity(undefined, data.nome, idade, data.email);
        this.pessoaRepository.inserePessoa(pessoa)

        return pessoa
    }

    removePessoa (data: any){
        const id = parseInt(data, 10)
        this.pessoaRepository.removePessoaPorId(id)
    }
}