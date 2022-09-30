// Video 1
let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b;
console.log("Residuo de la división: " + z);

z = a ** b;
console.log("Resultado del operador exponente: " + z);

// Video 2
    // Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);
    // Post-incremento (el operador ++ después de la variable)
z = b++;
console.log(b);
console.log(z);

// Pre-decremento (el operador -- antes de la variable)
z = --a;
console.log(a);
console.log(z);
    // Post-decremento (el operador -- después de la variable)
z = b--;
console.log(b);
console.log(z);

// Video 3
let c = 1, d = 4;
z = c + a * b;
console.log(z);

z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z)

z = (c + a) * b / c;
console.log(z)

// Video 4 Operadores de Asignación
let m = 1; //Operador de asignación
console.log(m);

m += 1; //Operador compuesto
console.log(m);
m -= 1;
console.log(m);
/*
    *=
    /=
    %/
    **=
*/

// Video 5 Operadores de comparación
c = "3";

z = a == b; //Si el valor es idéntico (no importa el tipo de dato)
console.log(z);
z = a == c;
console.log(z);

z = a === c; //Si el valor es idéntico (si  importa el tipo de dato)
console.log(z);

z = a != b; //Saber si a es diferente de b 
console.log(z);
z = a != c;
console.log(z);

z = a !== c;
console.log(z);

z = a < b; //Opweadores relacionales
console.log(z);

z = a <= b;
console.log(z);

z = b > a;
console.log(z);

z = a >= c;
console.log(z);
//>=

// Video 6 Ejercicio -Número par e impar-
a = 9;

if( a % 2 == 0 ) {
    console.log("Es un número par");
} else {
    console.log("Es un número impar");
}

//Video 7 Ejercicio -Mayor de edad-
let edad =20, adulto = 18;
if( edad >= adulto ) {
    console.log("Es una adulto");
} else {
    console.log("No es un adulto");
}

// Video 8 Operador AND
a = 5;
let valMin = 0, valMax = 10;
if( a >= valMin && a <= valMax ) {
    console.log("Dentro del rango");
} else {
    console.log("Fuera de rango");
}

// Video 9 Operador OR
let vacaciones = false, diaDescanso = false;
if( vacaciones == true || diaDescanso == true ) {
    console.log("El padre puede asistir al partido");
} else {
    console.log("El padre está ocupado");
}

// Video 10 Operador ternario
let resultado = (1 > 2) ? "verdadero" : 0;
console.log(resultado);

let numero = 10;
resultado = (numero % 2 == 0) ? "Número par" : "Número impar";
console.log(resultado);

// Video 11 Convertir de String a Number
let miNumero = "10";
console.log(typeof miNumero);

edad = Number(miNumero);
console.log(typeof edad);

if( edad >= 18 ) {
    console.log("Ya puede votar");
} else {
    console.log("Muy joven para votar");
}

resultado = (edad >= 18) ? "Ya puede votar" : "Muy joven para votar";
console.log(resultado);

// Video 12 Verificar que una variable sea number
    // NaN = Not a Number, se da cuadno no se puede convertir un string a number
miNumero = "10c";
edad = Number(miNumero);
console.log(edad);

if( isNaN(edad) ) {
    console.log("No es un número");
} else {
    resultado = (edad >= 18) ? "Ya puede votar" : "Muy joven para votar";
    console.log(resultado);
}

// Video 13 Precedencia de operadores
x = 5;
y = 10;
z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

resultado = 4 + 5 * 6 / 3;
console.log(resultado);

resultado = (4 + 5) * 6 / 3;
console.log(resultado);

