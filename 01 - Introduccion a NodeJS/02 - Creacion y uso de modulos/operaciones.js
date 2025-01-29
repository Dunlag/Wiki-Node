// Define las funciones para realizar operaciones matemáticas
function sumar(a , b){
    return a + b;
}

function restar(a , b){
    return a - b;
}

function multiplicar(a , b){
    return a * b;
}

function dividir(a , b){
    return a / b;
}

// Exporta las funciones para que puedan ser utilizadas en otros archivos
module.exports =  {
    sumar,
    restar: restar,
    mult : multiplicar
}