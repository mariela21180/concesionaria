let readlineSync = require('readline-sync');
let nro = -1;
let factorial = 1;

while(nro < 0) {
    nro = readlineSync.questionInt('Ingrese un numero: ');
    if (nro < 0) {
        console.log('El numero debe ser positivo.')
    }
}

for (let i = 0; i<=nro; i++) {
    if (i == 0 ) {
        factorial = 1;
    } else {
        factorial = factorial * i;
    }
}
console.log("El factorial de " +nro+ " es " +factorial)

