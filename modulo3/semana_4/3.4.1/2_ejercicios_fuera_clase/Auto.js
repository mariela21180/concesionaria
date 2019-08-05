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
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modelo, combustible, año, patente, titular, asientos, airbags, puertas) {
        var _this = _super.call(this, marca, modelo, combustible, año, patente, titular) || this;
        _this.asientos = asientos;
        _this.airbags = airbags;
        _this.puertas = puertas;
        return _this;
    }
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 30;
    };
    Auto.prototype.desacelerar = function () {
        this.velocidadActual -= 30;
    };
    Auto.prototype.toString = function () {
        return this.marca + "," + this.modelo + "," + this.combustible + "," + this.año + "," + this.patente + "," + this.titular + "," + this.asientos + "," + this.airbags + "," + this.puertas + ",,,";
    };
    return Auto;
}(Automotor_1["default"]));
exports["default"] = Auto;
