let readlineSync = require('readline-sync');

let nro = readlineSync.questionInt('Ingrese una potencia: ');

console.log("2 elevado a la " +nro+ " es " +Math.pow(2, nro));

