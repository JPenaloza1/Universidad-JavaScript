let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

// Uso de call para usar el método persona1.nombreCompleto
console.log( persona1.nombreCompleto( "Lic", "9212506231" ) );

console.log( persona1.nombreCompleto.call( persona2, "Ing", "9212501456" ) );