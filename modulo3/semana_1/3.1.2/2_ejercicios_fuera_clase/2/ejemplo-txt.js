"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync('abc.txt', 'utf8');
var colores = new Array();
var lineas = texto.split('\n');
lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
console.log("Lineas: ", lineas);
var aux;
for (var i = 0; i < lineas.length; i++) {
    aux = lineas[i].split(',');
    colores.push(aux);
}
console.log("Matriz: ", colores);
