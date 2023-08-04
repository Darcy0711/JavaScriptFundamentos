// Eventos del DOM CLICKS

const heading = document.querySelector('.heading')
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo heading'
})

const enlaces = document.querySelectorAll('.navegacion a')

//iterar
enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => {
        console.log('Diste click en un enlace')
    })
})