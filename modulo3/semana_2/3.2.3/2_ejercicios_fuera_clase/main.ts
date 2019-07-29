import Impresora from "./Impresora";
import Opcion from "./Opcion";
import Impresion from "./Impresion";

let miImpresora = new Impresora();

let opcion1 = new Opcion();
let opcion2 = new Opcion();

let impresion1 = new Impresion(["Hola","Me llamo Mariela"], opcion1);
let impresion2 = new Impresion(["Nos vemos pronto","Adios"], opcion2);
console.log(impresion1);
console.log(impresion2);
miImpresora.agregarACola(impresion1);
miImpresora.agregarACola(impresion2);

miImpresora.imprimir();