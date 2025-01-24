const operaciones = require('./operaciones');
const Persona = require('./persona');

const suma = operaciones.sumar(3,8);
const restar = operaciones.restar(3,8);
const multiplicar = operaciones.mult(3,8);

console.log(suma);
console.log(restar);
console.log(multiplicar);

const pers = new Persona('Elena', 'Gomez', 21);

console.log(pers.mostrar());

