let frutas = ['banana', 'maçã', 'uva']

let primeiraFruta = frutas[0]
console.log(primeiraFruta)

let ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)

//adicionando mais frutas
frutas.push('pera')

//removendo itens

frutas.pop()


frutas.forEach((fruta) => {
    console.log(fruta)

})
//quantidade de itens no array
console.log(frutas.length)


