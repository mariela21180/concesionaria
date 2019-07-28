let readlineSync = require('readline-sync');

let clave = "eureka";
let intentos = 3;

while (intentos > 0) {
    let palabra = readlineSync.question("Ingrese la palabra clave: ");
    if ( clave == palabra ) {
        console.log("Acerto!");
        intentos = 0;
    } else {
        intentos = intentos - 1;
        if (intentos > 0) {
            console.log("Error. Le quedan " + intentos + " intentos");
        }
        if (intentos == 0) {
            console.log("Error.");
        }
    }
}
console.log("No tiene mas intentos");