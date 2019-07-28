let readlineSync = require('readline-sync');
let cantidad = 0;

while (cantidad <= 0) {
    cantidad = readlineSync.questionInt("Ingrese la cantidad de dados: ");
    if (cantidad <= 0) {
        console.log("Debe ingresar un numero mayor que 0. Por favor intente nuevamente.");
    } else  {
        console.log("La probabilidad de sacar 6 en todos los dados es de 1/" + Math.pow(6, cantidad));
    }
} 