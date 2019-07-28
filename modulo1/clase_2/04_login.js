let readlineSync = require('readline-sync');
let user = "Juan";
let pass = "claveJuan";
let usuario = readlineSync.question("Ingrese su usuario: ");
let clave = readlineSync.question("Ingrese su clave: ");

if ((user == usuario) && (pass == clave) ) {
    console.log("Bienvenido " + user + "!!!");
} else {    
    console.log("Uruario y/o Clave incorrecta.");
}