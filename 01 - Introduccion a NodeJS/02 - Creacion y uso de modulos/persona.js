// Define la clase Persona con un constructor para inicializar sus propiedades
class Persona{
    constructor(nombre, apellidos, edad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }

    // Define un método mostrar() que devuelve una cadena con la información de la persona
    mostrar(){
        return `me llamo ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`;
    }
}

// Exporta la clase Persona para que pueda ser utilizada en otros archivos
module.exports = Persona;