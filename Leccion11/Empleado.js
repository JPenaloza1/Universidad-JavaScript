class Empleado extends Persona{
    static contadorEmpleados;

    constructor( sueldo ) {
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