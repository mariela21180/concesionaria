let readlineSync = require('readline-sync');
let nro = 1;
let maximo = Number.NEGATIVE_INFINITY;
let minimo = Number.POSITIVE_INFINITY;
for (let i = 1;i<=20;i++) {
    nro = readlineSync.questionInt("Ingrese el "+i+"er numero: ");
    if (nro > maximo) {
        maximo = nro;
    }     
    if (nro < minimo) {
        minimo = nro;
    }     
} 
console.log("De los numeros ingresados, el mas grande es " + maximo + " y el mas chico es " + minimo);
