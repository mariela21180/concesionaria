"use strict";
exports.__esModule = true;
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var readlineSync = require("./node_modules/readline-sync");
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var miRegistroAutomotor;
var miSegundoRegistroAutomotor;
var accion;
// Probando Clase RegistroAutomotor
console.log('Probando Clase RegistroAutomotor\n');
console.log('Creando Registro desde archivo "info_automotores.txt":');
miRegistroAutomotor = new RegistroAutomotor_1["default"](1, 'Registro Nacional', './info_automotores.txt');
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
    console.log("1) Ingresar automotor");
    console.log("2) Buscar automotor");
    console.log("3) Eliminar automotor");
    console.log("4) Actualizar automotor");
    console.log("0) Salir\n");
    return readlineSync.questionInt("Seleccione una opcion: ");
}
function ejecutar() {
    accion = menu();
    if (accion === 1) {
        var automotor = void 0;
        var marca = readlineSync.question("Marca: ");
        var modelo = readlineSync.question("Modelo: ");
        var combustible = readlineSync.question("Combustible: ");
        var año = readlineSync.questionInt("Anio: ");
        var patente = readlineSync.question("Patente: ");
        var titular = readlineSync.question("Titular: ");
        var tipo = void 0;
        while (tipo != 1 && tipo != 2 && tipo != 3) {
            tipo = readlineSync.questionInt("Tipo de Vehiculo: 1) Auto, 2) Moto, 3) Camion ");
            if (tipo === 1) {
                var asientos = readlineSync.questionInt("Asientos: ");
                var airbags = readlineSync.questionInt("Airbags: ");
                var puertas = readlineSync.questionInt("Puertas: ");
                automotor = new Auto_1["default"](marca, modelo, combustible, año, patente, titular, asientos, airbags, puertas);
            }
            else if (tipo === 2) {
                var cilindrada = readlineSync.questionInt("Cilindrada: ");
                automotor = new Moto_1["default"](marca, modelo, combustible, año, patente, titular, cilindrada);
            }
            else if (tipo === 3) {
                var ejes = readlineSync.questionInt("Ejes: ");
                var acoplado = void 0;
                if (readlineSync.questionInt("Acoplado: 0) Sin Acoplado, 1) Con Acoplado") === 0) {
                    acoplado = false;
                }
                else {
                    acoplado = true;
                }
                automotor = new Camion_1["default"](marca, modelo, combustible, año, patente, titular, ejes, acoplado);
            }
        }
        miRegistroAutomotor.agregarAutomotor(automotor);
    }
    else if (accion === 2) {
        var patente = readlineSync.question("Ingrese la Patente del automotor a buscar: ");
        var automotor = miRegistroAutomotor.burcarAutomotor(patente);
        if (automotor === null) {
            console.log("El automotor no existe en este registro.");
        }
        else {
            console.log(automotor);
        }
    }
    else if (accion === 3) {
        var patente = readlineSync.question("Ingrese la Patente del automotor a borrar: ");
        miRegistroAutomotor.borrarAutomotor(patente);
    }
    else if (accion === 4) {
        var patente = readlineSync.question("Ingrese la Patente del automotor a actualizar: ");
        var titular = readlineSync.question("Ingrese el nombre del nuevo titular: ");
        miRegistroAutomotor.actualizarAutomotor(patente, titular);
    }
    if (accion != 0) {
        miRegistroAutomotor.guardarAutomotores("info_automotores.txt");
    }
}
