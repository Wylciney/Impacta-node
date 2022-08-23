var numeroAtual = 110

while(numeroAtual <=100){
    console.log("numero atual",numeroAtual)
    numeroAtual +=10
}

do{
    console.log("Numero atual (do while)", numeroAtual)
    numeroAtual += 10
}while(numeroAtual <= 100)

const lista = [1, 2, 3, 4, 5]

lista.forEach(item => {
    console.log("Numero atual (forEach)", item)
})
