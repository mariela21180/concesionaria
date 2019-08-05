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
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, combustible, año, patente, titular, cilindrada) {
        var _this = _super.call(this, marca, modelo, combustible, año, patente, titular) || this;
        _this.cilindrada = cilindrada;
        return _this;
    }
    Moto.prototype.acelerar = function () {
        this.velocidadActual += 20;
    };
    Moto.prototype.desacelerar = function () {
        this.velocidadActual -= 20;
    };
    return Moto;
}(Automotor_1["default"]));
exports["default"] = Moto;
