//Arreglo String
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React']

// Arreglo numeros
const numeros = [10, 20,30]

let nuevoArray;

// filter = los que sean diferente a la condición que se ponga 
nuevoArray = tecnologias.filter( tech => tech !== 'React')

// includes- Comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('React')

// Some- Devuelve si al menos uno cumple la condición
// const resultado = numeros.some(numero => numero > 15)

// Find - Devuelve el primer elemento que cumpla la condición
// const resultado = numeros.find(numero => numero > 15)

// Every - Retorna true o false si todos cumplen la condición
// const resultado = numeros.every(numero => numero > 15)

// Reduce - Acumulanndo en el total
// const resultado = numeros.reduce((total, numero) => numero + total, 0)

// Filter - Crea un nuevo array en base a una condición
// const resultado = tecnologias.filter(tech => tech == 'Javascript')

// forEach - Acceder a cada elemento del array
const arrayForeach = tecnologias.forEach(function(tech){
    return tech
})

// Crear un nuevo array
const arrayMap = tecnologias.map(function(tech){
    return tech
})


console.log(resultado)