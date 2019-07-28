
let readlineSync = require('readline-sync');

let nro1 = readlineSync.questionInt("Ingrese un numero: ");
let nro2 = readlineSync.questionInt("Ingrese otro numero: ");
let menor = 0;
let mayor = 0;
let suma = 0;
let cadena = "";

if (nro1 <= nro2) {
    menor = nro1;
    mayor = nro2;
} else {
    menor = nro2;
    mayor = nro1;
}

for (let index = menor; index <= mayor; index++) {
    suma += index;
    if (index < mayor) {
        cadena += index + " + ";
    } else  {
        cadena += index;
    }
}
console.log("Analizaremos los numeros entre " + menor + " y " +mayor + ".\n"  );
console.log(cadena + " = " + suma);