"use strict";
exports.__esModule = true;
var Impresion = /** @class */ (function () {
    function Impresion(texto, opcion) {
        this.texto = texto;
        this.opcion = opcion;
    }
    Impresion.prototype.getTexto = function () {
        return this.texto;
    };
    Impresion.prototype.getOpcion = function () {
        return this.opcion;
    };
    return Impresion;
}());
exports["default"] = Impresion;
