class Cliente extends Persona {
    static contadorClientes = 0;
    
    constructor( fechaRegistro ) {
        this._idCliente         = ++Persona.contadorClientes;
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
                Fecha de registro: ${this._edad}`;
    }
}