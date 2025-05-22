import { PessoaEntity } from "../model/PessoaEntity"

export class PessoaRepository{
    private static instance: PessoaRepository
    private pessoaList: PessoaEntity[] = []

    constructor(){}

    static getInstance(): PessoaRepository{
        if( !this.instance ){
            this.instance = new PessoaRepository()
        }
        return this.instance
    }

    inserePessoa( pessoa : PessoaEntity){
        this.pessoaList.push(pessoa)
    }

    removePessoaPorId( id: number ){
        const index = this.findIndex(id)
        this.pessoaList.splice(index,1)
    }

    findById( id:number): PessoaEntity{
         const index = this.findIndex(id)
         return this.pessoaList[index]
    }

    findAll():PessoaEntity[]{
        return this.pessoaList
    }

    private findIndex( id: number):number{
        const index = this.pessoaList.findIndex( p => p.id == id)
        if(index == -1){
            throw new Error("ID informado não foi encontrado!!!")
        }
        return index
    }

}