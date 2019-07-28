let readlineSync = require('readline-sync');

let nro = readlineSync.questionInt('Ingrese un numero entero: ');

console.log('El numero ' + nro + ' tiene ' + cantidadDivisores(nro) + " divisores");


function esMultiplo(nro, nro2) {
    return ((nro%nro2) == 0);
}

function cantidadDivisores(nro) {
    let cantidad = 0;
    let divisor;
    for (divisor = 1; divisor<nro; divisor++) {
        if (esMultiplo(nro, divisor)) {
            cantidad++;
        }
    }
    return cantidad;
}
