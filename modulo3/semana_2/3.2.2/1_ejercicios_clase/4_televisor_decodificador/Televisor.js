"use strict";
exports.__esModule = true;
var Televisor = /** @class */ (function () {
    function Televisor(decodificador, marca, modelo) {
        this.decodificador = decodificador;
        this.marca = marca;
        this.modelo = modelo;
        this.canalActual = 0;
        this.volumenActual = 0;
        this.estaPrendido = false;
        this.TOTAL_CANALES = 99;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Televisor.prototype.subirCanal = function () {
        if (this.canalActual === this.TOTAL_CANALES) {
            this.canalActual = 0;
        }
        else {
            this.canalActual++;
        }
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.canalActual === 0) {
            this.canalActual = this.TOTAL_CANALES;
        }
        else {
            this.canalActual--;
        }
    };
    Televisor.prototype.irACanal = function (canal) {
        if (canal <= this.TOTAL_CANALES && canal >= 0) {
            this.canalActual = canal;
        }
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.volumenActual === 100) {
            this.volumenActual = 100;
        }
        else {
            this.volumenActual++;
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.volumenActual === 0) {
            this.volumenActual = 0;
        }
        else {
            this.volumenActual--;
        }
    };
    return Televisor;
}());
exports["default"] = Televisor;
