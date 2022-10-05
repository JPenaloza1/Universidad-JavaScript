class Persona {
    static contadorPersonas = 0;

    constructor( nombre, apellido, edad ) {
        this._nombre    = nombre;
        this._apellido  = apellido;
        this._edad      = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona() {
        return this._edad;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }

    get Edad() {
        return this._edad;
    }
    set Edad(edad) {
        this._edad = edad;
    }

    // Sobreescribiendo el método toString de la clase padre (Object)
    toString() {
        return `Id persona: ${this._idPersona}   
                Nombre: ${this._nombre} ${this._apellido}.   
                sEdad: ${this._edad}`;
    }
}