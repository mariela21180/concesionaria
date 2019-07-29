"use strict";
exports.__esModule = true;
var GestorLibros_1 = require("./GestorLibros");
var readlineSync = require("./node_modules/readline-sync");
var miGestorLibros;
var miSegundoGestorLibros;
var accion;
// Probando Clase GestorLibros
console.log('Probando Clase GestorLibros\n');
console.log('Creando Gestor deLibros desde archivo "info_libros.txt":');
miGestorLibros = new GestorLibros_1["default"]('./info_libros.txt');
console.log(miGestorLibros);
console.log('');
console.log('Creando Biblioteca sin archivo:');
miSegundoGestorLibros = new GestorLibros_1["default"]();
console.log(miSegundoGestorLibros);
console.log('');
console.log('Trabajando con el Gestor:');
while (accion != 0) {
    ejecutar();
}
// Metodos -----------------------------------------------------------
function menu() {
    console.log("Menu:");
    console.log("1) Agregar libro");
    console.log("2) Ver libros por titulo");
    console.log("3) Ver libros por autor");
    console.log("4) Eliminar libro");
    console.log("5) Modificar libro");
    console.log("6) Ver mi Biblioteca");
    console.log("0) Salir\n");
    return readlineSync.questionInt("Seleccione una opcion: ");
}
function ejecutar() {
    accion = menu();
    if (accion === 1) {
        var autor = readlineSync.question("Autor: ");
        var titulo = readlineSync.question("Titulo: ");
        var editorial = readlineSync.question("Editorial: ");
        var edicion = readlineSync.questionInt("Edicion: ");
        miGestorLibros.agregarLibro(autor, titulo, editorial, edicion);
    }
    else if (accion === 2) {
        var titulo = readlineSync.question("Ingrese el Titulo a buscar: ");
        miGestorLibros.verLibrosPorTitulo(titulo);
    }
    else if (accion === 3) {
        var autor = readlineSync.question("Ingrese el Autor a buscar: ");
        miGestorLibros.verLibrosPorAutor(autor);
    }
    else if (accion === 4) {
        var id = readlineSync.questionInt("Ingrese el id del libro a borrar: ");
        miGestorLibros.borrarLibro(id);
    }
    else if (accion === 5) {
        var id = readlineSync.questionInt("Ingrese el id del libro a actualizar: ");
        var autor = null;
        var titulo = null;
        var editorial = null;
        var edicion = null;
        if (readlineSync.questionInt("Desea cambiar el Autor? 1 (Si) - 2 (No) ") === 1) {
            autor = readlineSync.question("Ingrese el nuevo Autor: ");
        }
        if (readlineSync.questionInt("Desea cambiar el Titulo? 1 (Si) - 2 (No) ") === 1) {
            titulo = readlineSync.question("Ingrese el nuevo Titulo: ");
        }
        if (readlineSync.questionInt("Desea cambiar la Editorial 1 (Si) - 2 (No) ") === 1) {
            editorial = readlineSync.question("Ingrese la nueva Editorial: ");
        }
        if (readlineSync.questionInt("Desea cambiar la Edicion? 1 (Si) - 2 (No) ") === 1) {
            edicion = readlineSync.questionInt("Ingrese la nueva Edicion: ");
        }
        miGestorLibros.modificarLibro(id, autor, titulo, editorial, edicion);
    }
    else if (accion === 6) {
        console.log(miGestorLibros);
    }
}
2;
