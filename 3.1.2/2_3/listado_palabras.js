"use strict";
// o	Ejercicio 2 (Partir de cero)
// 	Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
// 	Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
// 	Insertar/eliminar/buscar/actualizar una palabra del listado
exports.__esModule = true;
var readlineSync = require("./node_modules/readline-sync");
var arreglo = [];
var accion;
while (accion != 4) {
    ejecutar();
}
// Metodos
function cargarPalabra(palabra) {
    arreglo.push(palabra);
}
function buscarPalabra(palabra) {
    var retorno = -1;
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === palabra) {
            retorno = i;
        }
    }
    return retorno;
}
function eliminarPalabra(palabra) {
    var indice = buscarPalabra(palabra);
    if (indice > -1) {
        arreglo.splice(indice, 1);
        return true;
    }
    return false;
}
function menu() {
    console.log("Menu:");
    console.log("1) Ingresar palabra");
    console.log("2) Buscar palabra");
    console.log("3) Eliminar palabra");
    console.log("4) Salir");
    return readlineSync.questionInt("Seleccione una opcion: ");
}
function ejecutar() {
    accion = menu();
    if (accion === 1) {
        while (accion === 1) {
            arreglo.push(readlineSync.question("Ingrese una palabra: "));
            ordenarBubbleSort(arreglo);
            console.log(arreglo);
            accion = readlineSync.questionInt("Desea cargar otra palabra? - Si(1) - No(0) :");
        }
    }
    else if (accion === 2) {
        var palabra = readlineSync.question("Ingrese la palabra a buscar: ");
        if (buscarPalabra(palabra) === -1) {
            console.log("La palabra ingresada no existe");
        }
        else {
            console.log("La palabra ingresada existe\n");
        }
    }
    else if (accion === 3) {
        console.log(arreglo);
        var palabra = readlineSync.question("Ingrese la palabra a eliminar: ");
        if (buscarPalabra(palabra) === -1) {
            console.log("La palabra ingresada no existe. Por favor intente nuevamente\n");
        }
        else {
            if (eliminarPalabra(palabra)) {
                console.log("La palabra ha sido eliminada con exito\n");
                console.log(arreglo);
            }
            else {
                console.log("La palabra no pudo ser eliminada. Por favor intente nuevamente\n");
            }
        }
    }
}
function ordenarBubbleSort(arreglo) {
    var n = arreglo.length;
    var i, j;
    for (i = 2; i < n; i++) {
        for (j = 0; j < n - 1; j++) {
            if (comparar(arreglo, j, j + 1) == 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}
function intercambiar(arreglo, i, j) {
    var aux;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}
function comparar(arreglo, i, j) {
    var comparacion;
    if (arreglo[i] == arreglo[j]) {
        comparacion = 0;
    }
    else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    }
    else {
        comparacion = 1;
    }
    return comparacion;
}
