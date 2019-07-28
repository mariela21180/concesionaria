let readlineSync = require('readline-sync'); 
let altura = readlineSync.questionFloat('Ingrese su altura: ' );
let alturaMinima = 1.30;

if (altura >= alturaMinima)  {
    console.log('Puede subir');
} else {
    console.log('No puede subir');
}
