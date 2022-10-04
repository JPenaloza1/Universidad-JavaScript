// let persona2 = new Persona("Karla", "Lopez");

class Persona {
    constructor( nombre, apellido ) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
        return this._apellido;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}



let persona1 = new Persona( "Jonathan", "Penaloza" );
persona1.nombre = "Jonathan Alexis";
console.log( persona1.nombre );

let persona2 = new Persona("Karla", "Lopez");
console.log( persona2.nombre );