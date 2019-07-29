"use strict";
exports.__esModule = true;
var fs = require("fs");
var LectorArchivo = /** @class */ (function () {
    function LectorArchivo() {
        this.archivo = null;
        this.lineas = null;
    }
    LectorArchivo.prototype.cargarArchivo = function (rutaArchivo) {
        this.archivo = fs.readFileSync(rutaArchivo, 'utf8');
        if (this.archivo) {
            this.lineas = this.archivo.split('\n');
            this.lineas = this.lineas.map(function (linea) { return linea.replace('\r', ''); });
            return true;
        }
        return false;
    };
    LectorArchivo.prototype.leerArchivo = function () {
        return this.lineas;
    };
    return LectorArchivo;
}());
exports["default"] = LectorArchivo;
