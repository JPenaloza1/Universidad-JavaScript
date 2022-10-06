class Empleado {
    constructor( nombre, sueldo ) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor( nombre, sueldo, departamento ) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}

function determinarTipo(tipo) {
    if( tipo instanceof Gerente ) {
        console.log('Es un objeto de tipo gerente');
        console.log(tipo._departamento);
    }
    if( tipo instanceof Empleado ) {
        console.log("Es un objeto de tipo empleado");
    }
    
    console.log( tipo.obtenerDetalles() );
}

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
determinarTipo( gerente1 );

let empleado1 = new Empleado("Juan", 6000);
determinarTipo( empleado1 );