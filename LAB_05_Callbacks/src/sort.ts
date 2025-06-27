type Pessoa = {
    nome: string;
    idade: number;
}

const pessoas: Pessoa[] = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Ana', idade: 56 }
    ]

const numeros: number[] = [10, 2, 100, 5]

const frutas = ['banana', 'maçã', 'laranja', 'abacaxi']

frutas.sort()
console.log(frutas)

//Ordem crescente
numeros.sort((a:number,b:number)=> a - b)
console.log(numeros)

//Ordem decrescente
numeros.sort((a,b)=> b - a)
console.log(numeros)


pessoas.sort((a,b) => a.idade - b.idade)

pessoas.sort((a,b) => a.nome.localeCompare(b.nome))

