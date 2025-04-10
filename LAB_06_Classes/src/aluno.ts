class Aluno{
    nome: string;
    matricula: string;
    idade: number;


    constructor(nome:string, matricula:string, idade:number){
        this.nome = nome; 
        this.matricula = matricula;
        this.idade = idade;
    }

    imprimeAluno(){
        console.log(`Nome: ${this.nome}
            Matricula : ${this.matricula}
            Idade: ${this.idade}`)
    }

}

const aluno1 = new Aluno("Pedro", "BTV26565", 23);
aluno1.imprimeAluno()

aluno1.nome = "Carlos";

aluno1.imprimeAluno();