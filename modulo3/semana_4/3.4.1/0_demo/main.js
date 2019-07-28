"use strict";
exports.__esModule = true;
var AutoDeportivo_1 = require("./AutoDeportivo");
var miAuto = new AutoDeportivo_1["default"]("Fiat", 600, "WQL824", 0);
miAuto.acelerar();
console.log(miAuto.getVelocidadActual());
console.log(miAuto);
