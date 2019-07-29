"use strict";
// Documentacion de la Libreria usada https://www.npmjs.com/package/print-message
exports.__esModule = true;
var printMessage = require("./node_modules/print-message");
var Impresora = /** @class */ (function () {
    function Impresora() {
        this.colaDeImpresion = new Array();
    }
    Impresora.prototype.agregarACola = function (impresion) {
        this.colaDeImpresion.push(impresion);
    };
    Impresora.prototype.imprimir = function () {
        this.colaDeImpresion.forEach(function (impresion) {
            printMessage(impresion.getTexto(), impresion.getOpcion());
        });
        this.colaDeImpresion = [];
    };
    return Impresora;
}());
exports["default"] = Impresora;
