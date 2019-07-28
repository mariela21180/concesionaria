"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Auto_1 = require("./Auto");
var AutoCarrera = /** @class */ (function (_super) {
    __extends(AutoCarrera, _super);
    function AutoCarrera(marca, modelo, numeroCompetencia, sponsors) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.numeroCompetencia = numeroCompetencia;
        if (sponsors) {
            _this.sponsors = sponsors;
        }
        else {
            _this.sponsors = [];
        }
        return _this;
    }
    AutoCarrera.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    AutoCarrera.prototype.getNumeroCompetencia = function () {
        return this.numeroCompetencia;
    };
    AutoCarrera.prototype.cambiarNumeroCompetencia = function (numeroNuevo) {
        this.numeroCompetencia = numeroNuevo;
    };
    AutoCarrera.prototype.agregarSponsor = function (sponsor) {
        var indice = this.buscarSponsor(sponsor);
        if (indice === -1) {
            this.sponsors.push(sponsor);
        }
        else {
            console.log("El sponsor ya existe");
        }
    };
    AutoCarrera.prototype.eliminarSponsor = function (sponsor) {
        var indice = this.buscarSponsor(sponsor);
        if (indice != -1) {
            this.sponsors.splice(indice);
        }
        else {
            console.log("El sponsor no existe");
        }
    };
    AutoCarrera.prototype.buscarSponsor = function (sponsor) {
        for (var i = 0; i < this.sponsors.length; i++) {
            if (this.sponsors[i] === sponsor) {
                return i;
            }
        }
        return -1;
    };
    return AutoCarrera;
}(Auto_1["default"]));
exports["default"] = AutoCarrera;
