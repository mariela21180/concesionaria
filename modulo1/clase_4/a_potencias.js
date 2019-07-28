let readlineSync = require('readline-sync');

let base = readlineSync.questionInt('Ingrese la base: ');
let exponente = readlineSync.questionInt('Ingrese el exponente: ');

console.log('Con funcion potenciaNumero, la potencia es = ', potenciaNumero(base, exponente));
console.log('Con funcion potenciaNumeroMath, la potencia es = ', potenciaNumeroMath(base, exponente));

function potenciaNumero(base, exponente) {
    let numero = 1;
    if (exponente != 0) {
        for (let i = 0; i<exponente;i++) {
            numero = numero * base;
        };
    } 
    return numero;
}


function potenciaNumeroMath(base, exponente) {
    return Math.pow(base, exponente);
}