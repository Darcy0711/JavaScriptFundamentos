// Operaciones en los arreglos

const  tecnologias = ['HTML', 'CSS', 'JS', 'REACT', 'Node.js']

// Añadir elementos al array
// tecnologias.push('Graphics') // Añade al final del array
// tecnologias.unshift('Graphics') // Añade al inicio del array

// const nuevoArreglo = [...tecnologias, 'Graphics']
// const nuevoArreglo = [ 'Graphics', ...tecnologias,]

// Eliminar elementos del arrey
// tecnologias.pop() // Elimina del final 
// tecnologias.shift() // Elimina el primer elemento del arreglo
// tecnologias.splice(2,1) // Elimina de una posicion en especifica

// const nuevoArray = tecnologias.filter(function(tech){
//    return tech !== 'HTML'
// })

// Reemplazar del arreglo
tecnologias[0] = 'Grid'

const nuevoArray = tecnologias.map(function(tech) {
    if(tech === 'HTML') {
        return 'Grid'
    }else {
        return tech
    }
})

console.table(tecnologias)