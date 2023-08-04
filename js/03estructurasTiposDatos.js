// Tipos de datos

//undefined
let cliente 
console.log(cliente)
console.log( typeof cliente)

//Boolean 
const descuento = true
console.log(descuento)
console.log( typeof descuento)


//Number
const numero1 = 20.20
const numero4 = 30
const numero3 = -100

//String o cadena de Texto
const alumno = "Darcy"
let producto = 'Monitor 20 pulgadas'

const numero = "30"
const numero2 = 30

console.log(typeof numero)
console.log(typeof numero2)


// BigInt
const numeroGrande = BigInt (232434234343434343494893843)
console.log(typeof numeroGrande)
const numero5 = 10
const numero6 = 20
console.log( numero + Number(numeroGrande) )

const numeros = "30"
const numero8 = 30

console.log(typeof String (numero2))

// Symbol
const primerSymbol = Symbol(30)
const segundoSymbol =  Symbol(30)
console.log( primerSymbol === segundoSymbol)
console.log (primerSymbol.valueOf())
