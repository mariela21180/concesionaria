let readlineSync = require('readline-sync');

let nro = readlineSync.questionInt("Ingrese el numero a multiplicar: ");
let nroHasta = readlineSync.questionInt("Ingrese hasta que numero se multiplicara: ");

console.log("\nLa tabla de multiplicacion solicitada es:"  );
for (let index = 1; index <= nroHasta; index++) {
    console.log(nro + " x " + index + " = " + nro*index);
}