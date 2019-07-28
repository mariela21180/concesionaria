import Decodificador from "./Decodificador";
import Televisor from "./Televisor";

console.log("Creando Decodificador");
let miDecodificador = new Decodificador(15822, "Blu", "5100");
console.log(miDecodificador);
console.log("");

console.log("Creando Televisor");
let miTv = new Televisor(miDecodificador, "LG", "Smart");
console.log(miTv);
console.log("");

console.log("Encender Televisor");
miTv.prenderApagar();
console.log(miTv);
console.log("");

console.log("Subir 3 canales");
for (let index = 0; index < 3; index++) {
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

console.log("Subir volumen 4 niveles");
for (let index = 0; index < 4; index++) {
    miTv.subirVolumen();
}
console.log(miTv);
console.log("");

console.log("Bajar volumen");
miTv.bajarVolumen();
console.log(miTv);
console.log("");

console.log("Apagar Televisor");
miTv.prenderApagar();
console.log(miTv);