"use strict";
exports.__esModule = true;
var Automotor = /** @class */ (function () {
    function Automotor(marca, modelo, combustible, año, patente, titular) {
        this.marca = marca;
        this.modelo = modelo;
        this.combustible = combustible;
        this.año = año;
        this.patente = patente;
        this.titular = titular;
    }
    Automotor.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    Automotor.prototype.prenderApagar = function () {
        this.estaPrendido = !this.estaPrendido;
    };
    Automotor.prototype.getPatente = function () {
        return this.patente;
    };
    return Automotor;
}());
exports["default"] = Automotor;
