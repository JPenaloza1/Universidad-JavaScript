let persona = {
    nombre:   "Juan",
    apellido: "Perez",
    email:    "jperez@mail.com",
    edad:     28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

persona.tel = "921254698";
persona.tel = "921365489";
console.log( persona );

delete persona.tel;
console.log(persona);
