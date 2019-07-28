let readlineSync = require('readline-sync');
let descuento = 0.15;
let mesAniversario = 10;

let mes = readlineSync.questionInt('Ingrese el mes de la compra (en numeros): ');
let cantidad = readlineSync.questionInt('Ingrese la cantidad vendida: ');
let precio = readlineSync.questionFloat('Ingrese el precio unitario: ');

let total = precio * cantidad;
console.log('Su compra fue de un total de $' + total);

if (mes == mesAniversario) {
    total = total * (1 - descuento);    
    console.log('Pero como compro en nuestro mes aniversario, le regalamos un ' + descuento * 100 + '% de descuento!. El precio final es de $' + total);
}