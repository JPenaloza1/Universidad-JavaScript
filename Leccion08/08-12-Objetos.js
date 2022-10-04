// Función constructor
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

Persona.prototype.tel = "9212503647";

let padre = new Persona("Juan", "Perez", "jperez@mail.com");
padre.tel = "9212502698";
console.log(padre.tel);

let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
madre.tel = "9212501478";
console.log( madre.tel );