class Usuario{
    nome : string
    email : string

    constructor(nome:string, email:string){
        this.nome = nome;
        this.email = email;
    }

    boasVindas(){
        console.log(`Bem vindo(a), ${this.nome}!
            Seu email é ${this.email}`)
    }
}

const Usuario1 = new Usuario("Enzo Banin", "baninenzo@gmail.com");

const Usuario2 = new Usuario("Cristiano", "ronaldo@outlook.com");

Usuario1.boasVindas();

Usuario2.boasVindas();


