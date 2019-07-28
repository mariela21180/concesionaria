"use strict";
exports.__esModule = true;
var Matriz = /** @class */ (function () {
    function Matriz() {
        this.arreglo = new Array();
    }
    Matriz.prototype.cargarMatriz = function (columna1, columna2) {
        var aux = [
            columna1,
            columna2
        ];
        this.arreglo.push(aux);
    };
    Matriz.prototype.get = function (x, y) {
        var filas = this.arreglo.length;
        console.log(filas);
        var columnas = this.arreglo[0].length;
        console.log(columnas);
        if ((filas >= x) && (columnas >= y)) {
            return this.arreglo[x][y];
        }
        else {
            return "Los valores ingresados se encuentran fuera del rango de la matriz";
        }
    };
    return Matriz;
}());
exports["default"] = Matriz;
