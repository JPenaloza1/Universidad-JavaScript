// Tipos primitivos porque no tienen atributos ni métodos asociados
let x = 10;

function cambiarValor(a){
    a = 20;
}

// Paso por valor (se pasa una copia del valor de "x" a "a" y después a cambia su valor a 20)
cambiarValor(x);
console.log(x);

// console.log(a); Marca error porque "a" se creó dentro de la función y se destruye cuando termina su ejecución

const persona = {
    nombre: "Juan",
    apellido: "Perez"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
}

// Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);