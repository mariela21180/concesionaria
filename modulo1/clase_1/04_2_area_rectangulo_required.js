let readlineSync = require('readline-sync');
let alto = readlineSync.questionInt("Ingrese el primer numero: ");
let ancho = readlineSync.questionInt("Ingrese el segundo numero: ");
console.log(alto + ancho);