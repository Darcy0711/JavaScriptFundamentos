// Objetos - Manipulación

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Object.freeze(producto) -Freexe - No deja modificarlo, no perimite añadir ni eliminar
// Object.seal(producto) - Modificar propiedades existentes, no permite añadir ni eliminar

//Reescribir un valor
producto.nombre = "Monitor Curvo"

// Si no existe, lo va añadir
producto.imagen = "imagen.jpg"

//Eliminar
delete producto.disponible

console.table(producto)

