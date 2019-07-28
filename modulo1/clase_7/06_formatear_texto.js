// 6)  Escriba una funcion que permita formatear un texto con las siguientes caracteristicas:
// -se debe especificar un tamaño.
// -se debe especificar un caracter de relleno.
// -se debe especificar la ubicacion del texto.

let readlineSync = require('readline-sync');
let texto = preguntarCadena('Ingrese el texto a formatear');
let tamaño = preguntarNumero('Ingrese el tamanio final');
let caracter = preguntarCadena('Ingrese el caracter de relleno');
let ubicacion = 0;


let totalRelleno = tamaño - texto.length;
let relleno = dibujarCaracteres(totalRelleno, caracter);


while (ubicacion != 1 && ubicacion != 2 ) {
    ubicacion = pedirUbicacion();
}



let cadena1 = "";
let cadena2 = "";
let textoFormateado = "";
if (ubicacion == 1) {
    cadena1 = texto;
    cadena2 = relleno;    
} else if (ubicacion == 2) {
    cadena1 = relleno;
    cadena2 = texto;    
}
console.log("El texto formateado es:");
console.log(textoFormateado.concat(cadena1, cadena2));


//////////////////////////////////////////////////////////////////////////////////////

function preguntarNumero(pregunta) {
    return readlineSync.questionInt(pregunta + ": ");
}

function preguntarCadena(pregunta) {
    return readlineSync.question(pregunta + ": ");
}

function pedirUbicacion() {
    let ubicacion = preguntarNumero('Ingrese ubicacion (1=izq, 2=der)');
    if (ubicacion != 1 && ubicacion != 2 ) {
        console.log("Error al ingresar la ubicacion, intente nuevamente.");
    }
    return ubicacion;
}

function dibujarCaracteres(largo, caracter) {
    let caracteres = "";
    for (let i = 0; i<largo; i++) {
        caracteres = caracteres + caracter;
    }
    return caracteres;
}