let readlineSync = require('readline-sync');

let nro1 = readlineSync.questionInt('Ingrese el primer numero: ');
let nro2 = readlineSync.questionInt('Ingrese el segundo numero: ');

if (esMultiplo(nro1, nro2)) {
    console.log('El numero ' + nro1 + ' ES multiplo del numero ' + nro2);
} else {
    console.log('El numero ' + nro1 + ' NO es multiplo del numero ' + nro2);
}

function esMultiplo(nro1, nro2) {
    return ((nro1%nro2) == 0);
}
