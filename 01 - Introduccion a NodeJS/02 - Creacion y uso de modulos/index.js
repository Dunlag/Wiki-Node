// Importa las funciones de operaciones desde el archivo 'operaciones.js'
const operaciones = require('./operaciones');
// Importa la clase Persona desde el archivo 'persona.js'
const Persona = require('./persona');

// Llama a las funciones de operaciones importadas y guarda los resultados
const suma = operaciones.sumar(3,8);
const restar = operaciones.restar(3,8);
const multiplicar = operaciones.mult(3,8);

// Imprime los resultados de las operaciones en la consola
console.log(suma);
console.log(restar);
console.log(multiplicar);

// Crea una nueva instancia de la clase Persona
const pers = new Persona('Elena', 'Gomez', 21);

// Llama al método mostrar() del objeto Persona y lo imprime en la consola
console.log(pers.mostrar());