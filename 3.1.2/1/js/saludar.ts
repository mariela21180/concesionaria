import * as readlineSync from '../node_modules/readline-sync'; 

let nombre: string = readlineSync.question("Ingrese su nombre completo: ");

console.log("Hola " + nombre);