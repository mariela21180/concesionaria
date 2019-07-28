let readlineSync = require('readline-sync');
let nroDeseado = readlineSync.question('Escriba el numero que desea verificar si es mayor o no a 20: ');
if (nroDeseado > 20) {
    console.log('El número es mayor a 20: ' + nroDeseado);
} else {
    console.log('El número es menor o igual a 20: ' + nroDeseado);
}