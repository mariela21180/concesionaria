"use strict";
exports.__esModule = true;
var Matriz_1 = require("./Matriz");
var readlineSync = require("./node_modules/readline-sync");
// Probando Clase Auto
console.log('Probando Clase Matriz');
console.log('Creando una matriz:');
var miMatriz = new Matriz_1["default"]();
var accion = 1;
while (accion != 0) {
    ejecutar();
}
console.log('');
// Metodos -----------------------------------------------------------
function menu() {
    console.log("Menu:");
    console.log("1) Cargar fila");
    console.log("2) Buscar celda");
    console.log("0) Salir\n");
    return readlineSync.questionInt("Seleccione una opcion: ");
}
function ejecutar() {
    accion = menu();
    if (accion === 1) {
        miMatriz.cargarMatriz(readlineSync.question("Cargando una fila a la matriz.\nIngrese texto de la columna 1: "), readlineSync.question("Ingrese texto de la columna 2: "));
        console.log(miMatriz);
    }
    else if (accion === 2) {
        console.log(miMatriz.get(readlineSync.questionInt("Buscando una celda de a la matriz.\nIngrese el numero de la fila (inicia en 0): "), readlineSync.questionInt("Ingrese el numero de la columna (0 o 1): ")));
    }
}