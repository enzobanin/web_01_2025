export class PessoaEntity{
    id: number
    nome: string
    idade: number
    email: string

    constructor(
        id: number | undefined,
        nome: string,
        idade: number,
        email: string
    ){
        this.id = id ?? this.gerarId()
        this.nome = nome
        this.idade = idade
        this.email = email
    }

    private gerarId():number{
        return parseInt((Date.now() /100).toString(),10)
    }
}