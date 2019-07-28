let readlineSync = require('readline-sync');
let n = readlineSync.questionInt('Ingrese la dimension del arreglo: ');

let v = new Array(n);
for (let i = 0; i<n; i++) {
    v[i] = readlineSync.questionInt('Ingrese en numero de la posicion '+(i+1)+': ');
}
let invertido = "[ ";
for (let i = n-1; i>=0; i--) {
    if (i > 0 ) {
        invertido = invertido + v[i] + ", ";
    } else {
        invertido = invertido + v[i] + " ]";
    }
}
console.log("El arreglo es:");
console.log(v);
console.log("El arreglo invertido es:");
console.log(invertido);