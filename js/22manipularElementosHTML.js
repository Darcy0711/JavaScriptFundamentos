// Manipular elementos HTML con JS

const heading = document.querySelector('.heading')

heading.textContent = 'Un Nuevo heading'

console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por default'


const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(enlaces => enlaces.textContent = 'Nuevo enlace')
