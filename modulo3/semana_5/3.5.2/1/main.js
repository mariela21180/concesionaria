"use strict";
exports.__esModule = true;
var Kiosco_1 = require("./Kiosco");
var Producto_1 = require("./Producto");
var miKiosco = new Kiosco_1["default"]("Mariel Express");
miKiosco.cargarListaProductos("./listaProductos.txt");
console.log(miKiosco.getListaProductos());
var venta1 = new Producto_1["default"](12, "Chicles Beldent", 15, 15);
var venta2 = new Producto_1["default"](73, "Helado Frigor", 25, 50);
var venta3 = new Producto_1["default"](900, "Invento", 70, 50);
try {
    miKiosco.vender(venta1);
}
catch (err) {
    console.log(err.message);
}
try {
    miKiosco.vender(venta2);
}
catch (err) {
    console.log(err.message);
}
try {
    miKiosco.vender(venta3);
}
catch (err) {
    console.log(err.message);
}
console.log(miKiosco.getListaProductos());
console.log(miKiosco.getListaVentas());
miKiosco.guardarListaVentas("./listaVentas.txt");
