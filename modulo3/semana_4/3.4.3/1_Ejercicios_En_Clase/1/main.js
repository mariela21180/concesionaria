"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("./node_modules/readline-sync");
/**
 * El criterio que uso para saber donde va a votar es alfabético.
 * Divido las letras del alfabeto por la cantidad de colegios
 * Segun la inicial del nombre veo en que colegio iria
 **/
var nombres = leerArchivo('nombres.txt');
var colegios = leerArchivo('colegios.txt');
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
var division = Math.trunc(alphabet.length / colegios.length);
console.log("Nombres:", nombres);
console.log("Colegios:", colegios);
console.log("Division:", division);
var nombre = readlineSync.question("Ingrese nombre: ");
try {
    if (buscarNombre(nombre) === -1) {
        console.log("El nombre ingresado no existe.");
    }
    else {
        var position = getNamePosition(nombre);
        console.log("Posicion: ", position);
        for (var i = 0; i < colegios.length; i++) {
            if ((position >= (division * i)) && (position < division * (i + 1))) {
                console.log(nombre, "vota en el colegio", colegios[i]);
            }
        }
    }
}
catch (err) {
    console.log(err.message);
}
// Metodos --------------------------------------------------
function getNamePosition(nombre) {
    var inicial = (nombre.substr(0, 1)).toLowerCase();
    return alphabet.indexOf(inicial);
}
function buscarNombre(nombre) {
    if (nombre == "" || nombre == undefined) {
        throw Error("El nombre no puede estar vacio");
    }
    return nombres.indexOf(nombre);
}
function leerArchivo(rutaArchivo) {
    if (rutaArchivo == "") {
        throw Error("La ruta no puede estar vacia");
    }
    var archivo = fs.readFileSync(rutaArchivo, 'utf8');
    var lineas = archivo.split('\n');
    lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
    return lineas;
}
