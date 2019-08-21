"use strict";
exports.__esModule = true;
var Producto = /** @class */ (function () {
    function Producto(id, nombre, costo, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.costo = costo;
        this.cantidad = cantidad;
    }
    Producto.prototype.setCosto = function (costo) {
        this.costo = costo;
    };
    Producto.prototype.setCantidad = function (cantidad) {
        this.cantidad = cantidad;
    };
    Producto.prototype.getId = function () {
        return this.id;
    };
    Producto.prototype.getCosto = function () {
        return this.costo;
    };
    Producto.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Producto.prototype.toString = function () {
        return "" + this.id + "," + this.nombre + "," + this.costo + "," + this.cantidad;
    };
    return Producto;
}());
exports["default"] = Producto;
