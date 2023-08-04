// Comparación y Operador Estricto

const numero1 = 30;
const numero2 = "30"

/*
    == (Comparación pero no es estricto)
    === (Comparación estricta-Revisa el valor y tipo de dato )
*/

if(numero1 ===   numero2){
    console.log('Si son iguales')
}else {
    console.log('No, no son iguales')
}

const autenticado = true
if(autenticado){
    console.log('Si esta autenticado')
}