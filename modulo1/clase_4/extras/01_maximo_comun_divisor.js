let readlineSync = require('readline-sync');
let nro1 = 0;
let nro2 = 0;

while (nro1 <= 0) {
    nro1 = readlineSync.questionInt('Ingrese un numero natural: ');
    if (nro1 <= 0 )
        console.log('El numero debe ser mayor a cero.');
}
while (nro2 <= 0) {
    nro2 = readlineSync.questionInt('Ingrese otro numero natural: ');
    if (nro2 <= 0 )
        console.log('El numero debe ser mayor a cero.');
}

function maximoComunDivisor(nro1, nro2) {
    let menor;
    if (nro1>nro2) {
        menor = nro2;
    } else {
        menor = nro1;
    }
    
    let maximo = 0;

    for (let divisor = 0;divisor<=menor; divisor++) {
        if ( esMultiplo(nro1, divisor) && esMultiplo(nro2, divisor) ) {
            maximo = divisor;
        }
    }

    return maximo;
}

console.log('El maximo comun divisor entre '+nro1+' y '+nro2+' es ' + maximoComunDivisor(nro1, nro2));

function esMultiplo(nro, nro2) {
    return ((nro%nro2) == 0);
}