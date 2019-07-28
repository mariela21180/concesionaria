// Ranking de Facturación
// • Una empresa quiere saber quienes fueron los clientes que más facturaron en un mes
// • let dos arreglos, uno para los nombres de los clientes y otro para los montos de facturación (enteros)
// • La cantidad de clientes es fija (10)
// • Mostrar por pantalla los 5 clientes que más facturaron y los montos
// • Pensar en como cargar la información para facilitar la escritura del ranking

let readlineSync = require('readline-sync');
let cantidad = 6;
let clientes = new Array(cantidad);
let facturacion = new Array(cantidad);
//Cargo ordenado, uno por uno
console.log("Cargando los arreglos de forma ordenada");
let cliente;
let fact;
let numCliente;
let i, j;

for (numCliente = 0; numCliente < cantidad; numCliente++) {
    cliente = readlineSync.question("Cliente ", numCliente + 1, ": ");
    fact = readlineSync.question("Facturacion ", numCliente + 1, ": ");
    i = 0;
    while (i < numCliente && facturacion[i] > fact) {
        i++;
    }
    for (j = numCliente; j >= i; j--) {
        clientes[j] = clientes[j - 1];
        facturacion[j] = facturacion[j - 1];
    }
    clientes[i] = cliente;
    facturacion[i] = fact;
}
for (let posicion = 0; posicion <= 4; posicion++) {
    console.log("(", posicion, ") ", clientes[posicion], "[", facturacion[posicion], "] ");
}