"use strict";
exports.__esModule = true;
var AutoDeportivo = /** @class */ (function () {
    function AutoDeportivo(marca, modelo, dominio, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.dominio = dominio;
        this.velocidad = velocidad;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidad += 1;
        console.log("Runnnnn");
    };
    AutoDeportivo.prototype.getVelocidadActual = function () {
        return this.velocidad;
    };
    return AutoDeportivo;
}());
exports["default"] = AutoDeportivo;
