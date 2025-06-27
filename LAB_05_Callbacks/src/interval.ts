//setInterval(() => console.log("Trabalhando com interval..."), 2000)

let contador = 0

const interval = setInterval( () => {
    contador++
    console.log("Rodando o interval");
    if (contador == 3){
        console.log("Intervalo cancelado após 3 execuções")
        clearInterval(interval)
    }
}, 500)



