let readlineSync = require('readline-sync');

let x = readlineSync.questionInt('Ingrese un numero: ');
let n = readlineSync.questionInt('Ingrese una potencia: ');

console.log(x+ " elevado a la " +n+ " es " +Math.pow(x, n));

