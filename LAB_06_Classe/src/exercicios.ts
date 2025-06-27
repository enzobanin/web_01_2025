// Exercício 01

class Livro{
    titulo: string
    autor: string
    anoPublicacao: number
    editora: string

    constructor(titulo: string, autor: string, anoPublicacao: number, editora: string){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.editora = editora
    }

    exibirDados(){
        console.log(`\nLivro: ${this.titulo}\nAutor: ${this.autor}\nAno Publicação ${this.anoPublicacao}\nEditora: ${this.editora}`)
    }
}

// Exercício 02

const livro1 = new Livro("Fausto","Johann Wolfgang von Goethe",1790, "Nova Fronteira")
const livro2 = new Livro("O Inferno de Dante","Dante Alighieri",1280, "Nova Fronteira")

livro1.exibirDados()
livro2.exibirDados()

// Exercício 04

class Carro{
    marca: string
    modelo: string
    ano: number

    constructor( marca:string, modelo:string, ano:number){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    mostrarCarro(){
        console.log(`\nModelo: ${this.modelo}\nMarca: ${this.marca}\nAno: ${this.ano}`)
    }
}

const carro = new Carro('Ford','Camaro', 2016)
carro.mostrarCarro()
carro.ano = 2017
carro.mostrarCarro()