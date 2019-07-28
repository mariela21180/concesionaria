// 1)  Hacer la función sufijo que indica si una palabra es sufijo de otra palabra/texto. Por ejemplo:
//  sufijo("ola", "Hola mundo") -> falso
//  sufijo("ola", "que hermosa ola") -> verdadero
//  sufijo("ola", "que hermosa ola para surfear") -> falso

let readlineSync = require('readline-sync');
let cadena = preguntarCadena("Ingrese el texto completo");
let palabra = preguntarCadena("Ingrese la palabra a buscar");

console.log('sufijo("' + palabra + '", "' + cadena + '") -> ' + esSufijo(palabra,cadena));

function esSufijo(palabra, cadena) {
    let largoPalabra = palabra.length;
    let largoCadena = cadena.length;
    return (cadena.substr(largoCadena-largoPalabra, largoPalabra) == palabra );
}

function preguntarCadena(pregunta) {
    return readlineSync.question(pregunta + ": ");
}

