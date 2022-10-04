class Persona {
    static contadorPersonas = 0; //Atributo de a clase
    
    constructor( nombre, apellido ) {
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
        console.log( "Se incrementa contador: " + Persona.contadorObjetosPersona);
    }

    get nombre() {
        return this._nombre;
        return this._apellido;
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

    nombreCompleto() {
        return this.idPersona + ": " + this._nombre + " " + this._apellido;
    }

    // Sobreescribiendo el método toString de la clase padre (Object)
    toString() {
        // Se aplica el polimorfismo (múltiples formas en tiempo de ejecución)
        // el método que se ejecuta depende si es una referencia de tipo padre
        // o de tipo hijo
        return this.nombreCompleto();
    }

    static saludar() {
        console.log( "Saludos desde el método static ");
    }

    static saludar2( persona ) {
        console.log( persona.nombre );
    }
}

class Empleado extends Persona {
    constructor( nombre, apellido, departamento ) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento( departamento ) {
        this._departamento = departamento;  
    }

    // Sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ", " + this._departamento;
    }
}

let persona1 = new Persona( "Jonathan", "Penaloza" );
console.log( persona1.toString() );

let empleado1 = new Empleado( "Carlos", "Lara" );
console.log( empleado1.toString() );

console.log( Persona.contadorPersonas );

let persona2 = new Persona( "Karla", "López", "Arq" );
console.log( persona2.toString() );