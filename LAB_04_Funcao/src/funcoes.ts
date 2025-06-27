function message(frase: string = "Qualquer coisa"):string{
    return frase
}

const message1 = (frase: string = "Qualquer coisa") => frase

function hello():void{
    console.log("Hello World")
}

hello()

console.log(hello())

const hello1 = () => console.log("Hello World")

console.log(message())

function soma( a:number, b:number, c?:number):number{
    if(c){
        return a + b + c
    }else{
        return a + b
    }
}

const soma1 = ( a:number, b:number, c?:number) =>{
    if(c){
        return a + b + c
    }else{
        return a + b
    }
}

console.log(soma(2,2,2), soma( 5,4))