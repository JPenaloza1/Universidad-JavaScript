// Video 1
// let autos = new Array('BMW', 'Mercedez Benz', 'Volvo');
const autos = ['BMW', 'Mercedez Benz', 'Volvo'];
console.log(autos);

// Video 2
console.log(autos[0]);
console.log(autos[2]);

for( let i = 0 ; i <= autos.length ; i++ ){
    console.log(i + ' ' + autos[i]);
}

// Video 3
autos[1] = 'Ford';
console.log(autos[1]);

autos.push('Chevrolet');
console.log(autos);

// Video 4
console.log(autos.length);
autos[autos.length] = 'Cadillac';
console.log(autos);

autos[6] = 'Porshe';
console.log(autos);

// Video 5
console.log(Array.isArray(autos));
console.log(autos instanceof Array);