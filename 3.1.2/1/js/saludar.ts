import * as readlineSync from '../node_modules/readline-sync'; 

let nombre = readlineSync.question("Ingrese su nombre completo: ");

console.log("Hola " + nombre);