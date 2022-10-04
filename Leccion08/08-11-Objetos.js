// Función constructor
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Juan", "Perez", "jperez@mail.com");
console.log( padre.nombreCompleto() );
let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
console.log( madre.nombreCompleto() );

padre.nombre = "Carlos";
console.log( padre );
console.log( madre );

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

let miNumero1 = new Number(1);
let numero2 = 2;

let miBoolean1 = new Boolean(true);
let miBoolean2 = true;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion1 = new Function();
let miFuncion2 = function(){};