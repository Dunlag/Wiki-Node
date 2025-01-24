class Persona{
    constructor(nombre, apellidos, edad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }

    mostrar(){
        return `me llamo ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`;
    }
}

module.exports = Persona; 