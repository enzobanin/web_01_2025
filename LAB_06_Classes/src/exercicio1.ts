class Livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;
    editora: string; 

    constructor(titulo:string, autor:string, anoPublicacao:number, editora:string){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao= anoPublicacao;
        this.editora = editora;
    }
    exibirDados(){
        console.log(`Titulo: ${this.titulo}
            Autor: ${this.autor}
            Ano de Publicacao: ${this.anoPublicacao}
            Editora: ${this.editora
            }
            `)
    }
}

const livro1 = new Livro("A origem dos guardioes", 
    "Machado de Assis", 2018, "Leitura"
)

livro1.exibirDados();

livro1.editora = "Saraiva"

livro1.exibirDados();

livro1.titulo = "Lenda dos guardioes"

livro1.exibirDados();