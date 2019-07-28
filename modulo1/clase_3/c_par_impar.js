let readlineSync = require('readline-sync');
let nro = 0;

while (nro == 0) {
    nro = readlineSync.questionInt("Ingrese un numero: ");
    if (nro == 0) {
        console.log("Debe ingresar un numero distinto de 0. Por favor intente nuevamente.");
    } else 
    if (nro%2 == 0) {
        console.log("El numero es par.")
    } else {
        console.log("El numero es impar.")
    }
} 