let readlineSync = require('readline-sync');

let nota, suma, promedio;

cantNotas = 10;
suma = 0;
for(let contador = 1; contador <= cantNotas; contador++) {
    nota = readlineSync.questionFloat("Ingrese la nota "+contador+": ");
    suma += nota;
}
promedio = suma/cantNotas;
console.log("El promedio de las notas es: " + promedio.toFixed(2));
