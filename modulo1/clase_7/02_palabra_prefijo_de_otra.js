// 2)  Hacer la función prefijo que indica si una palabra es prefijo de otra palabra/texto. Por ejemplo:
//  prefijo("cul", "espectaculo") -> falso
//  prefijo("cul", "culto") -> verdadero

let readlineSync = require('readline-sync');
let cadena = preguntarCadena("Ingrese el texto completo");
let palabra = preguntarCadena("Ingrese la palabra a buscar");

console.log('prefijo("' + palabra + '", "' + cadena + '") -> ' + esPrefijo(palabra,cadena));

function esPrefijo(palabra, cadena) {
    let largoPalabra = palabra.length;
    return (cadena.substr(0, largoPalabra) == palabra );
}

function preguntarCadena(pregunta) {
    return readlineSync.question(pregunta + ": ");
}

