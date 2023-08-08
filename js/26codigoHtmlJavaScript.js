
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value

    const alertPrevia = document.querySelector('.alerta')
    if (alertPrevia) {
        alertPrevia.remove()
    }

    const alerta = document.createElement('DIV')
    alerta.classList.add('alert')
    
    console.log(alerta)

    if(nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios'
    } else {
        alerta.textContent = 'Todo bien..'
    }

   formulario.appendChild(alerta)
})