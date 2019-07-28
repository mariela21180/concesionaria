let readlineSync = require('readline-sync');
let cantidad = readlineSync.questionInt('Ingrese la cantidad: ');
let precio = readlineSync.questionInt('Ingrese el precio: ');
let descuento = 0.10;
let montoMinimo = 1000;
let total = cantidad*precio;

console.log("Su compra total fue de $" + total);
if (total > montoMinimo) {
    total = total * (1 - descuento);
    console.log("Como supera los $" + montoMinimo + ", obtiene un descuento del " + descuento*100 + "%.\nEl precio final es de $" + total);
}

