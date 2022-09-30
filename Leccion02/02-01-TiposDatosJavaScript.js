//Tipo de dato string
var nombre = "Carlos";
console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objecto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
console.log(typeof objecto);

//Tipo de dato boolean (true, false)
var bandera = false;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

//arreglo en JavaScript
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

//Cadena vacia (empty string)
var z = '';
console.log(z);
console.log(typeof z);

// Concatenación de variables
var nombre = "Juan";
var apellido = "Perez";

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

var x = nombre + 219;
console.log(x);

x = nombre + (2 +4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);

// let y const
let nombre;
nombre = "Juan";
console.log( nombre );

const apellido = "Perez";
//apellido = "Lara"; Error no se puede cambiar el valor de una constante

// Buenas prácticas
let nombreCompleto = "Juan Perez";
console.log( nombreCompleto );

let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);

// Reglas para definir nombres de variables
let nombreCompleto = "Juan Perez";
let nombrecompleto = "Carlos Lara";
console.log( nombreCompleto );
console.log( nombrecompleto );

let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
//let 1nombreCompleto; no está permitido iniciar el nombre de una variable con numeros

let ruptura = 10;