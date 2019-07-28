let readlineSync = require('readline-sync');
let nro = 1;
let maximo = Number.NEGATIVE_INFINITY;
let minimo = Number.POSITIVE_INFINITY;
let suma = 0;
let counter = 0;
while (nro != 0) {
    nro = readlineSync.questionInt("Ingrese un numero: ");
    if (nro != 0) {
        if (nro > maximo) {
            maximo = nro;
        }     
        if (nro < minimo) {
            minimo = nro;
        }     
        suma += nro;       
        counter ++;
    }
} 
if (counter == 0) {
    console.log("Ingreso 0 y ha salido del sistema.");
} else {
    console.log("El numero mas grande es: " + maximo);
    console.log("El numero mas chico es: " + minimo);
    console.log("El numero promedio es: " + suma/counter);
}