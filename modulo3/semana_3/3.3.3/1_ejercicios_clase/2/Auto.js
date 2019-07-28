"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    return Auto;
}());
exports["default"] = Auto;
