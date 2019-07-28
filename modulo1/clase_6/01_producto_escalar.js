// Producto Escalar
// • Cargue dos arreglos de dimensión N números
// (la cantidad es ingresada por el usuario)
// • Calcule el producto escalar entre los dos arreglos

let readlineSync = require('readline-sync');
let n = readlineSync.questionInt('Ingrese la dimension del arreglo: ');

let v1 = new Array(n);
let v2 = new Array(n);
let producto = 0;

console.log("Cargando el primer arreglo:");
cargarVector(v1, n)
console.log("Cargando el segundo arreglo:");
cargarVector(v2, n)

for (let i = 0; i<n; i++) {
    producto = producto + (v1[i]*v2[i]);    
}


console.log("v1: " + v1);
console.log("v2: " + v2);
console.log("Producto escalar: " + producto);

///////////////////////////////////////////////////////////

function cargarVector(v, n) {
    for (let i = 0; i<n; i++) {
        v[i] = readlineSync.questionInt('Ingrese el numero de la posicion '+(i+1)+': ');
    }
}