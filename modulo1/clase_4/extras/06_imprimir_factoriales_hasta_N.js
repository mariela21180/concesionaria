let readlineSync = require('readline-sync');
let nro = -1;

while(nro < 0) {
    nro = readlineSync.questionInt('Ingrese un numero: ');
    if (nro < 0) {
        console.log('El numero debe ser positivo.')
    }
}

for (let i = 1; i<=nro; i++) {
    let factorial = 1;
    for (let j = 1; j<=i; j++) {
        factorial = factorial * j;
    }
    console.log(i+"! = "+ factorial)
}

