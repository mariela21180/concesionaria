"use strict";
exports.__esModule = true;
var readlineSync = require("../node_modules/readline-sync");
var nombre = readlineSync.question("Ingrese su nombre completo: ");
console.log("Hola " + nombre);
