let readlineSync = require('readline-sync');
let n = readlineSync.questionInt('Ingrese la dimension del arreglo: ');
let v = new Array(n);

let positivos = 0;
let negativos = 0;
let ceros = 0;

for (let i = 0; i<n; i++) {
    let numero = readlineSync.questionInt('Ingrese en numero de la posicion '+(i+1)+': ');
    v[i] = numero;
}
for (let i = 0; i<n; i++) {
    if (v[i] == 0) {
        ceros++;
    } else if (v[i]<0) {
        negativos++;
    } else {
        positivos++;
    }
}
console.log("El arreglo es:");
console.log(v);
console.log("Tiene " + positivos + ' positivos, ' + negativos + ' negativos y ' + ceros + ' ceros');