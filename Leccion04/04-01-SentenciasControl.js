// Video 1
let condicion = false;

if( condicion ) {
    console.log("Condición verdadera");
} else {
    console.log("Condicion falsa");
} 

// Video 2
let numero = 3;

if( numero == 1 ){
    console.log("Número uno");
} else if( numero == 2 ) {
    console.log("Número 2");
} else if( numero == 3 ) {
    console.log("Número tres");
} else if( numero == 4 ){
    console.log("Número cuatro");
} else {
    console.log("Número desconocido");
}

// Video 4
let mes = 9;
let estacion;

if( mes == 1 | mes == 2 || mes ==12 ){
    estacion = "Invierno";
} else if( mes == 3 || mes == 4 || mes == 5 ){
    estacion = "Primavera";
} else if( mes == 6 || mes ==7 || mes == 8 ){
    estacion = "Verano";
} else if( mes == 9 || mes == 10 || mes == 11 ){
    estacion = "Otoño";
} else {
    estacion = "Valor incorrecto";
}

console.log(estacion);

// Video 5
let hora = 22;
let saludo;

if( hora >= 0 && hora <= 6 ){
    saludo = "Durmiendo";
} else if( hora >= 7 && hora <= 11 ){
    saludo = "Buenos días";
} else if( hora >= 12 && hora <= 18 ){
    saludo = "Buenas tardes";
} else if( hora >= 19 && hora <= 24 ){
    saludo = "Buenas noches";
} else {
    saludo = "Hora incorrecta";
} 

console.log(saludo);

// Video 7
numero = 3;
let numeroTexto = "Valor desconocido";

switch( numero ) {
    case 1:
        numeroTexto = "Número uno";
        break;

    case 2:
        numeroTexto = "Número dos";
        break;

    case 3:
        numeroTexto = "Número tres";
        break;

    case 4:
        numeroTexto = "Número cuatro";
        break;

    case 2:
        numeroTexto = "Número dos";
        break;

    default:
        numeroTexto = "Caso no encontrado";
        break;
}

console.log(numeroTexto);

// Video 8
mes = 3;
estacion = "Estación desconocida";

switch( mes ){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor incorrecto';                
}
console.log(estacion);