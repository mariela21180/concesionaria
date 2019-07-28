"use strict";
exports.__esModule = true;
var Monitor = /** @class */ (function () {
    function Monitor(fuentes) {
        this.estaPrendido = false;
        this.fuentes = fuentes;
        this.fuenteActual = this.fuentes[0];
    }
    Monitor.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    Monitor.prototype.getFuenteActual = function () {
        return this.fuenteActual;
    };
    Monitor.prototype.getFuentes = function () {
        return this.fuentes;
    };
    Monitor.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Monitor.prototype.cambiarFuente = function (fuente) {
        if (fuente != undefined) {
            var indice = this.fuentes.indexOf(fuente);
            if (indice > -1) {
                this.fuenteActual = this.fuentes[indice];
                console.log('Nueva fuente seleccionada:', this.fuenteActual, '\n');
            }
            else {
                console.log('El monitor no posee la fuente especificada\n');
            }
        }
    };
    return Monitor;
}());
exports["default"] = Monitor;
