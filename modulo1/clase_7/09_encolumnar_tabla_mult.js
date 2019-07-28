// 9) Escriba un algoritmo que genere la tabla de multiplicacion de los numeros naturales de 1 cifra. Preguntando al usario como desea encolumnarlos.

let readlineSync = require('readline-sync');


let ubicacion = 0;
while (ubicacion != 1 && ubicacion != 2 ) {
    ubicacion = pedirUbicacion();
}


    
for (let i = 1; i<=9; i++) {
    console.log(formatearTexto((i*1).toString(), 4, " "), formatearTexto((i*2).toString(), 4, " "), formatearTexto((i*3).toString(), 4, " "), formatearTexto((i*4).toString(), 4, " "), formatearTexto((i*5).toString(), 4, " "), formatearTexto((i*6).toString(), 4, " "), formatearTexto((i*7).toString(), 4, " "), formatearTexto((i*4).toString(), 4, " "), formatearTexto((i*9).toString(), 4, " "));
}



//////////////////////////////////////////////////////////////////////////////////////

function formatearTexto(texto, tamaño, caracter) {
    let totalRelleno = tamaño - texto.length;
    let relleno = dibujarCaracteres(totalRelleno, caracter);
    let cadena1 = "";
    let cadena2 = "";
    let cadena3 = "";
    let textoFormateado = "";
    if (ubicacion == 1) {
        cadena1 = texto;
        cadena2 = relleno;    
    } else if (ubicacion == 2) {
        cadena1 = relleno;
        cadena2 = texto;    
    }
    return textoFormateado.concat(cadena1, cadena2);
}

function preguntarNumero(pregunta) {
    return readlineSync.questionInt(pregunta + ": ");
}

function pedirUbicacion() {
    let ubicacion = preguntarNumero('Ingrese alineacion de encolumnado (1=izq, 2=der)');
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