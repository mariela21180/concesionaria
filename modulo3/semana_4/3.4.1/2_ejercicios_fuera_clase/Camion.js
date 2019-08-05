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
var Automotor_1 = require("./Automotor");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, combustible, año, patente, titular, ejes, acoplado) {
        var _this = _super.call(this, marca, modelo, combustible, año, patente, titular) || this;
        _this.ejes = ejes;
        _this.acoplado = acoplado;
        return _this;
    }
    Camion.prototype.acelerar = function () {
        this.velocidadActual += 30;
    };
    Camion.prototype.desacelerar = function () {
        this.velocidadActual -= 30;
    };
    Camion.prototype.toString = function () {
        return this.marca + "," + this.modelo + "," + this.combustible + "," + this.año + "," + this.patente + "," + this.titular + ",,,,," + this.ejes + "," + this.acoplado;
    };
    return Camion;
}(Automotor_1["default"]));
exports["default"] = Camion;
