"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, combustible, año, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.combustible = combustible;
        this.año = año;
        this.patente = patente;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getCombustible = function () {
        return this.combustible;
    };
    Auto.prototype.getAño = function () {
        return this.año;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
exports["default"] = Auto;
