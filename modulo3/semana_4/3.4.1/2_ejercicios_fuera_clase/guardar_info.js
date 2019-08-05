"use strict";
exports.__esModule = true;
var fs = require("fs");
function escribirArchivo(rutaArchivo, contenidoArchivo) {
    fs.writeFile(rutaArchivo, contenidoArchivo, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Informacion Guardada con Exito!");
    });
}
exports["default"] = escribirArchivo;
