let readlineSync = require('readline-sync');
let nro = 1;
let distribucion = 0;
let counter = 0;
let positivos = 0;
while (nro != 0) {
    nro = readlineSync.questionInt("Ingrese un numero: ");
    if (nro > 0) {
        positivos ++;
    }     
    if (nro != 0) {
        counter ++;
    }
} 
if (counter == 0) {
    console.log("Ingreso 0 y ha salido del sistema.");
} else {
    console.log("Ingreso " + positivos + " positivos, " + (positivos/counter)*100 + "% del total");
}