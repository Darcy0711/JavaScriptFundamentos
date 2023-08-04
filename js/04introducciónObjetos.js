// Objetos
//Creación objeto
const producto = {
    nombre:  "Tablet",
    precio: 300,
    disponible: true,
}

console.log(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

//Destructuring
const {nombre, precio, disponible} = producto
console.log(nombre,precio,disponible)

// Object Literal Enhancements
const autenticado = true
const usuario = "Darcy"

const nuevoObjeto ={
    autenticado,
    usuario
}

console.log(nuevoObjeto)