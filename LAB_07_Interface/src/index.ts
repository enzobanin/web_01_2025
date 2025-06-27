import { DateUtils } from "./DateUtils";

const dateUtils = new DateUtils()

console.log( dateUtils.formatarData(new Date(), 'YYYY-MM-DD'))
console.log(dateUtils.diferencaEmDias(new Date("2025-04-01"), new Date()))
console.log(dateUtils.adicionarDias(new Date(), 10))
console.log(dateUtils.ehFinalDeSemana(dateUtils.adicionarDias(new Date(), 2)))
console.log(dateUtils.converterParaISO(new Date()))

// Ex 02
interface Livro{
    titulo: string,
    autor: string,
    anoPublicacao: number
}

const livro1: Livro = {anoPublicacao: 2020, autor: "Fulano", titulo: "O Livro"}
const livro2: Livro = {anoPublicacao: 2021, autor: "Ciclano", titulo: "O Livro II"}

console.log(livro1, livro2, livro1.autor)


// Ex 03
interface Veiculo{
    marca: string
    modelo: string
    ligar():void
}

class Carro implements Veiculo{
    marca: string
    modelo: string

    constructor(marca: string, modelo: string){
        this.marca = marca
        this.modelo = modelo
    }

    ligar():void{
        console.log("Carro ligado...")
    }
}