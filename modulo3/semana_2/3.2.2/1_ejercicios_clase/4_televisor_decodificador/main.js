"use strict";
exports.__esModule = true;
var Decodificador_1 = require("./Decodificador");
var Televisor_1 = require("./Televisor");
console.log("Creando Decodificador");
var miDecodificador = new Decodificador_1["default"](15822, "Blu", "5100");
console.log(miDecodificador);
console.log("");
console.log("Creando Televisor");
var miTv = new Televisor_1["default"](miDecodificador, "LG", "Smart");
console.log(miTv);
console.log("");
console.log("Encender Televisor");
miTv.prenderApagar();
console.log(miTv);
console.log("");
console.log("Subir 3 canales");
for (var index = 0; index < 3; index++) {
    miTv.subirCanal();
}
console.log(miTv);
console.log("");
console.log("Ir al canal 99");
miTv.irACanal(99);
console.log(miTv);
console.log("");
console.log("Subir canal");
miTv.subirCanal();
console.log(miTv);
console.log("");
console.log("Subir columen 4 niveles");
for (var index = 0; index < 4; index++) {
    miTv.subirVolumen();
}
console.log(miTv);
console.log("");
console.log("Bajar columen");
miTv.bajarVolumen();
console.log(miTv);
console.log("");
console.log("Apagar Televisor");
miTv.prenderApagar();
console.log(miTv);
