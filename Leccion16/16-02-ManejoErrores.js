"use strict"

let resultado = "5";

try {
    // x = 10;
    if( isNaN( resultado ) ) throw "No es un número";
    else if( resultado === "" ) throw "Es una cadena vacía";
    else if( resultado >= 0 ) throw "Valor positivo";
    else if( resultado < 0 ) throw "Valor negativo";
} catch (error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
} finally {
    console.log("Termina la revisión de errores");
}