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
                Nombre: ${this._nombre} ${this._apellido}   
                Edad: ${this._edad}`;
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor( nombre, apellido, edad, sueldo ) {
        super( nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo     = sueldo;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }
    
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    // Sobreescritura
    toString() {
        return `Id empleado: ${this._idEmpleado}   
                ${super.toString()}  
                Sueldo: \$${this._edad}`;
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;
    
    constructor( nombre, apellido, edad, fechaRegistro ) {
        super( nombre, apellido, edad );
        this._idCliente         = ++Cliente.contadorClientes;
        this._fechaRegistro     = fechaRegistro;
    }

    get idCliente() {
        return this._idEmpleado;
    }
    
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    // Sobreescritura
    toString() {
        return `Id cliente: ${this._idCliente}   
                ${super.toString()}  
                Fecha de registro: ${this._fechaRegistro}`;
    }
}


// Pruebas
let persona1 = new Persona( "Juan", "Perez", 25 );
console.log( persona1.toString() );

let persona2 = new Persona("Carlos", "Ramírez", 45);
console.log( persona2.toString() );

let empleado1 = new Empleado("Carlos", "Ramírez", 48, 5000);
console.log( empleado1.toString() );

let empleado2 = new Empleado("Laura", "Quintero", 35, 8000);
console.log( empleado2.toString() );

let cliente1 = new Cliente("Jose", "Pressman", 24, new Date());
console.log( cliente1.toString() );

let cliente2 = new Cliente("Maria", "Lara", new Date());
console.log( cliente2.toString() );