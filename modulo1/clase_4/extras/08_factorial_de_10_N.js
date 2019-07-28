let readlineSync = require('readline-sync');

for (let cantidad = 1; cantidad <= 10; cantidad++) {
    let nro = -1;
    
    while (nro < 0) {
        nro = readlineSync.questionInt('Ingrese un numero: ');
        if (nro < 0) {
            console.log('El numero debe ser positivo.')
        }
    }    
    console.log("El factorial de " + nro + " es " + factorialDeN(nro));    
}

function factorialDeN(nro) {
    let factorial = 1;
    for (let i = 0; i <= nro; i++) {
        if (i == 0) {
            factorial = 1;
        } else {
            factorial = factorial * i;
        }
    }
    return factorial;
}