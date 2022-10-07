miFuncion1();
miFuncion2();

function miFuncion1() {
    console.log("Función 1");
}

function miFuncion2() {
    console.log("Función 2");
}

// Función de tipo callback
function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar( op1, op2, funcionCallback) {
    let resultado = op1 + op2;
    funcionCallback(`Resultado ${resultado}`);
}

sumar(5, 3, imprimir);

// Llamadas asíncronas con uso de setTimeout
function miFuncionCallback() {
    console.log("Saludo asíncrono");
}

setTimeout(miFuncionCallback, 3000); // Después de 3 segundos

setTimeout( function(){ console.log("Saludo asíncrono 2")}, 4000);

setTimeout( () => console.log("Saludo asíncrono 3"), 5000 );