"use strict";
exports.__esModule = true;
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var readlineSync = require("./node_modules/readline-sync");
var Auto_1 = require("./Auto");
var miRegistroAutomotor;
var miSegundoRegistroAutomotor;
var accion;
// Probando Clase RegistroAutomotor
console.log('Probando Clase RegistroAutomotor\n');
console.log('Creando Registro desde archivo "info_autos.txt":');
miRegistroAutomotor = new RegistroAutomotor_1["default"](1, 'Registro Nacional', './info_autos.txt');
console.log(miRegistroAutomotor);
console.log('');
console.log('Creando Registro sin archivo:');
miSegundoRegistroAutomotor = new RegistroAutomotor_1["default"](2, 'Registro Provincial');
console.log(miSegundoRegistroAutomotor);
console.log('');
console.log('Trabajando con Registro nro', miRegistroAutomotor.getId(), '"' + miRegistroAutomotor.getNombre() + '":');
while (accion != 0) {
    ejecutar();
}
// Metodos -----------------------------------------------------------
function menu() {
    console.log("Menu:");
    console.log("1) Ingresar auto");
    console.log("2) Buscar auto");
    console.log("3) Eliminar auto");
    console.log("4) Actualizar auto");
    console.log("0) Salir\n");
    return readlineSync.questionInt("Seleccione una opcion: ");
}
function ejecutar() {
    accion = menu();
    if (accion === 1) {
        var marca = readlineSync.question("Marca: ");
        var modelo = readlineSync.question("Modelo: ");
        var combustible = readlineSync.question("Combustible: ");
        var año = readlineSync.questionInt("Anio: ");
        var patente = readlineSync.question("Patente: ");
        var titular = readlineSync.question("Titular: ");
        var auto = new Auto_1["default"](marca, modelo, combustible, año, patente, titular);
        miRegistroAutomotor.agregarAuto(auto);
    }
    else if (accion === 2) {
        var patente = readlineSync.question("Ingrese la Patente del auto a buscar: ");
        var auto = miRegistroAutomotor.burcarAuto(patente);
        if (auto === null) {
            console.log("El auto no existe en este registro.");
        }
        else {
            console.log(auto);
        }
    }
    else if (accion === 3) {
        var patente = readlineSync.question("Ingrese la Patente del auto a borrar: ");
        miRegistroAutomotor.borrarAuto(patente);
    }
    else if (accion === 4) {
        var patente = readlineSync.question("Ingrese la Patente del auto a actualizar: ");
        var titular = readlineSync.question("Ingrese el nombre del nuevo titular: ");
        miRegistroAutomotor.actualizarAuto(patente, titular);
    }
    if (accion != 0) {
        console.log(miRegistroAutomotor);
    }
}
