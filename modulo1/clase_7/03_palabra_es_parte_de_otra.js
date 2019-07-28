// 3)  Hacer la función esParte que indica si una palabra está contenida en la otra palabra/texto. Por ejemplo:
//  esParte("cul", "espectaculo") -> verdadero
//  esParte("cul", "culto") -> verdadero
//  esParte("cul", "algo que no") -> falso

let readlineSync = require('readline-sync');
let cadena = preguntarCadena("Ingrese el texto completo");
let palabra = preguntarCadena("Ingrese la palabra a buscar");

console.log('esParte("' + palabra + '", "' + cadena + '") -> ' + esParte(palabra,cadena));

function esParte(palabra, cadena) {
    let retorno = false;
    let largoPalabra = palabra.length;
    let largoCadena = cadena.length;
    for (let i = 0; i<(largoCadena-largoPalabra); i++) {
        if (cadena.substr(i, largoPalabra) == palabra ) {
            retorno = true;
        }
    }
    return retorno;
}

function preguntarCadena(pregunta) {
    return readlineSync.question(pregunta + ": ");
}

