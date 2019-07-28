// Búsqueda de Clientes y Facturación
// • La misma empresa ahora quiere buscar la facturación de un cliente dado
// • Leer el nombre del cliente que interesa
// • Pensar como optimizar la búsqueda con el ordenamiento


let readlineSync = require('readline-sync');
let cantidad = 6;
let clientes = new Array(cantidad);
let facturacion = new Array(cantidad);
//Cargo ordenado, uno por uno
console.log("Cargando los arreglos:");
let cliente;
let fact;
let numCliente;

for (numCliente = 0; numCliente < cantidad; numCliente++) {
    cliente = readlineSync.question("Cliente ", numCliente + 1, ": ");
    fact = readlineSync.questionInt("Facturacion ", numCliente + 1, ": ");
    clientes[numCliente] = cliente;
    facturacion[numCliente] = fact;
}
mostrarArreglos(cantidad, clientes, facturacion);

console.log("Ordenando los arreglos:");
ordenarSelectionSort(cantidad, clientes, facturacion);
mostrarArreglos(cantidad, clientes, facturacion);

cliente = readlineSync.question("Ingrese el Cliente a buscar : ");
posicion = buscarRecursivo(cliente, clientes, 0, clientes.length);
if (posicion > -1) {
    console.log("El cliente " + cliente + " tiene una facturacion de $" + facturacion[posicion]);
} else {
    console.log("El cliente " + cliente + " no existe");
}

// Metodos ***********************************************/
function ordenarSelectionSort(n, clientes, facturacion) {
    let i, j, posicion;
    for (i = 0; i < n - 1; i++) {
        posicion = i;
        for (j = i + 1; j < n; j++) {
            let comparacion = comparar(facturacion, posicion, j);
            if (comparacion == 1) {
                posicion = j;
            }
        }
    }
    intercambiar(clientes, i, posicion);
    intercambiar(facturacion, i, posicion);
}

function buscarRecursivo(valorBuscado, a, izq, der) {
    let posicion;
    if (izq <= der) {
        let medio;
        medio = Math.floor((izq + der) / 2);
        if (valorBuscado == a[medio]) {
            posicion = medio;
        } else if (valorBuscado < a[medio]) {
            posicion = buscarRecursivo(valorBuscado, a, izq, medio - 1);
        } else {
            posicion = buscarRecursivo(valorBuscado, a, medio + 1, der);
        }
    } else {
        posicion = -1
    }
    return posicion;
}
function intercambiar(arreglo, i, j) {
    let aux;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

function comparar(arreglo, i, j) {
    let comparacion;
    if (arreglo[i] == arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}
function mostrarArreglos(cantidad, clientes, facturacion){
    for (let posicion = 0; posicion < cantidad; posicion++) {
        console.log("(", posicion, ") ", clientes[posicion], "[", facturacion[posicion], "] ");
    }
}