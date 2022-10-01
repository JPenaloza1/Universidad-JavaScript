// Video 1
let contador = 0;

while( contador < 3 ){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");

// Video 2

contador = 0;

do{
    console.log(contador);
    contador++;
    
} while( contador < 3 );
console.log("Fin ciclo do-while");

// Video 3
for( contador = 0 ; contador < 3 ; contador++ ){
    console.log(contador);
}
console.log("Fin ciclo for");

// Video 4
for( contador = 0 ; contador <= 10 ; contador++ ){
    if( contador % 2 == 0 ){
        console.log(contador);
        break;
    }
}
console.log("Fin del ciclo for");

// Video 5
for( contador = 0 ; contador <= 10 ; contador++ ){
    if( contador % 2 !== 0 ){
        continue;
    }
    console.log(contador);
}

// Video 6
inicio:
for( contador = 0 ; contador <= 10 ; contador++ ){
    if( contador % 2 !== 0 ){
        continue inicio;
    }
    console.log(contador);
}