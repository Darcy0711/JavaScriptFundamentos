// Metodo flecha y funciones flecha
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React']

const nuevoArray = tecnologias.map( (tech) => {
    if(tech === 'HTML'){
        return 'Graphics'
    }else {
        return tech
    }
})

const nuevoArray2 = tecnologias.filter( tech => tech !== 'React'
)

console.log(nuevoArray)
console.log(nuevoArray2)