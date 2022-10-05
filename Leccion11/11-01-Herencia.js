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

class Empleado extends Persona {
    constructor( nombre, apellido, edad, sueldo ) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Persona.contadorPersonas;
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
    constructor( nombre, apellido, edad, fechaRegistro ) {
        super(nombre, apellido, edad);
        this._idCliente         = ++Persona.contadorPersonas;
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
        return `Id cliente: ${this._idEmpleado}   
                ${super.toString()}  
                Fecha de registro: ${this._edad}`;
    }
}


persona1 = new Persona( "Jonathan", "Penaloza", 21, );
console.log( persona1.toString() );

persona2 = new Empleado("Fernando", "Penaloza", 52, 4589);
console.log( persona2 );

persona3 = new Cliente("Lourdes", "Sanchez", 48, new Date());
console.log( persona3 );