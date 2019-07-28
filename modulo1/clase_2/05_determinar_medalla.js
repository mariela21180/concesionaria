let readlineSync = require("readline-sync");
let puesto = readlineSync.questionInt("Ingrese la posicion de llegada: ");

switch (puesto) {
    case 1:
        console.log("Ha ganado la medalla de Oro");
        break;
    case 2:
        console.log("Ha ganado la medalla de Plata");
        break;
    case 3:
        console.log("Ha ganado la medalla de Bronce");
        break;
    default:
        console.log("Gracias por participar. Se le otorga medalla de participacion");
}