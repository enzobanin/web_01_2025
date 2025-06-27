function concatenar( a: string, b: string, callback:(param:string)=> void ):void{
    var op = a + " " + b;
    callback(op)
}

function somar( a: number, b: number, callback:(param:number)=> void ):void{
    var op = a + b;
    callback(op)
}

function imprimir(value:any):void{
    console.log("A operacao efetuada resultou em: " + value)
}

console.log( concatenar("Olá ","Mundo!!",imprimir))
console.log( somar(2, 6, imprimir))