let readlineSync = require('readline-sync');
let nro = 1;
let maximo = Number.NEGATIVE_INFINITY;
let counter = 0;
while (nro != 0) {
    nro = readlineSync.questionInt("Ingrese un numero: ");
    if (nro > maximo) {
        maximo = nro;
    }     
    counter ++;
} 
if ((maximo == 0) && (counter == 1)) {
    console.log("Ingreso 0 y ha salido del sistema.");
} else {
    console.log("El numero mas grande es: " + maximo);
}