// 5) Escriba un algoritmo que genere un histograma horizontal de 10 valores ingresados por teclado, luego de leer todos los valores.

let readlineSync = require('readline-sync');
let n = 10;

let valores = new Array(n);
let histograma = new Array();
let numerosSinRepetir = new Array();

let contador = 0;
for (let i = 0; i<n; i++) {
    valores[i] = preguntarNumero('Ingrese el numero de la posicion '+(i+1));
    if (!(existeNumero(valores[i], numerosSinRepetir))) {
        numerosSinRepetir[contador] = valores[i];
        contador++;
    }
}

for (let i = 0; i<numerosSinRepetir.length; i++) {
    histograma[i] = contarRepeticiones(numerosSinRepetir[i], valores);
}

console.log("El histograma de los valores ingresados es:");
console.log(histograma);
console.log(dibujarRenglon(numerosSinRepetir.length*3+2));
console.log(numerosSinRepetir);


function contarRepeticiones(numero, arreglo) {
    let contador = 0;
    for (let i = 0; i<arreglo.length; i++) {
        if (numero == arreglo[i]) {
            contador++;
        }
    }
    return contador;
}
function existeNumero(numero, arreglo) {
    let retorno = false;
    for (let i = 0; i<arreglo.length; i++) {
        if (numero == arreglo[i]) {
            retorno = true;
        }
    }
    return retorno;
}

function preguntarNumero(pregunta) {
    return readlineSync.questionInt(pregunta + ": ");
}

function dibujarRenglon(largo) {
    let renglon = "";
    for (let i = 0; i<largo; i++) {
        renglon = renglon + "-";
    }
    return renglon;
}