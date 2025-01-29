// Imprime en la consola un array con los argumentos que se le pasan al script cuando se ejecuta.
// process.argv es un array que contiene los argumentos de línea de comandos.
// El primer elemento (índice 0) suele ser la ruta al ejecutable de Node.js.
// El segundo elemento (índice 1) es la ruta al script que se está ejecutando.
// Los elementos restantes son los argumentos que se le pasan al script.
console.log(process.argv);


// Función para obtener el valor de un parámetro específico pasado por línea de comandos.
function getParam(param){
    // Busca el índice del parámetro en el array process.argv.
    const index = process.argv.indexOf(param);
    // Si el parámetro no se encuentra (indexOf devuelve -1), retorna null.
    // Si el parámetro se encuentra, retorna el valor del argumento siguiente (el valor del parámetro).
    return  index === -1 ? null : process.argv[index+1];
}

// Obtiene los valores de los parámetros --nombre y --edad.
const nombre = getParam('--nombre');
const edad = getParam('--edad');


// Comprueba si se proporcionaron ambos parámetros.
if(nombre && edad){
    // Si ambos parámetros tienen valores, imprime un mensaje con el nombre y la edad.
    console.log('el nombres es ' + nombre + ' y la edad es: ' + edad);
    
}else{
    // Si alguno de los parámetros no se proporcionó, imprime un mensaje de error.
    console.log('alguno de los dos tiene un error');
    
}