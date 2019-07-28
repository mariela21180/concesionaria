// 4)  Hacer una función que determine si una palabra es palíndromo (capicúa). Por ejemplo:
//  esPalindromo("anilina") -> verdadero
//  esPalindromo("roma") -> falso
//  esPalindromo("dabale arroz a la zorra el abad") -> verdadero   recordar que las letras mayúsculas no son iguales a las minúsculas.

let readlineSync = require('readline-sync');  
let texto = preguntarCadena("Ingrese el texto a verificar");

console.log('esPalindromo("' + texto + '") -> ' + esPalindromo(texto));

function esPalindromo(texto) {
    let arreglo = texto.split(" ");
    let textoTrim = "";
    for (let i = 0; i<arreglo.length; i++) {
        textoTrim = textoTrim + arreglo[i];
    }
    console.log("Texto ingresado (sin espacios): " + textoTrim);
    let largoPalabra = textoTrim.length;
    let palindromo = "";
    for (let i = largoPalabra-1; i>=0; i--) {
        palindromo = palindromo + textoTrim.charAt(i);
    }
    console.log("Texto invertido (sin espacios): " + palindromo);
    
    return (textoTrim == palindromo);
}

function preguntarCadena(pregunta) {
    return readlineSync.question(pregunta + ": ");
}

