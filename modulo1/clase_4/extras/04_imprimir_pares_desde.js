let readlineSync = require('readline-sync');
let nro = -1;

while (nro%2 != 0) {
    nro = readlineSync.questionInt('Ingrese un numero par: ');
    if (nro%2 != 0 )
        console.log('El numero debe ser par.');
}

let cadena = "";
for (let i = nro; i>=2; i--) {
    if (i%2 == 0) {
        cadena = cadena + i+' ';
    }
}
console.log('Los numeros pares desde ' + nro + ' hasta 2 son:\n' + cadena);