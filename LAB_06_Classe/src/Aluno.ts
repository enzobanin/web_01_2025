export class Aluno{
    nome: string
    matricula: string
    cpf: number

    constructor(nome: string, matricula: string, cpf: number){
        this.nome = nome
        this.matricula = matricula
        this.cpf = cpf
    }

    imprimiAluno(){
        console.log(`Nome: ${this.nome}\n Matrícula: ${this.matricula}\n Cpf: ${this.cpf}`)
    }
}
