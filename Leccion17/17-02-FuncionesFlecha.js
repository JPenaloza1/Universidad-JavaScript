let miFuncion = function() {
    console.log("Saludos desde mi función");
}

// const miFuncionFlecha = () => {
//     console.log("Saludos desde mi función flecha");
// }

// const miFuncionFlecha = () => console.log("Saludos desde mi función flecha");
// miFuncionFlecha();

// const saludar = () => {
//     return "Saludos desde función flecha";
// }

const saludar = () => "Saludos desde función flecha";

console.log(saludar());

const regresarObjeto = () => ({nombre: "Juan", apellido: "Lara"});

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}
funcionConParametrosClasico("Saludos con parametros clásicos");

// const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros("Saludos con parametros");

// const funcionConVariosParametros = (op1, op2) => op1+op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return resultado;
};

console.log( funcionConVariosParametros(5,4) );