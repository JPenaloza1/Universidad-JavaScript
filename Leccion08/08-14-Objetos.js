let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, telefono){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + telefono;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

// Uso de apply para usar
// Uso de call para usar el método persona1.nombreCompleto
console.log( persona1.nombreCompleto("Lic.", "9212506287") );

let arreglo = ["Ing", "9212504189"];
console.log( persona1.nombreCompleto.apply( persona2, arreglo ) );