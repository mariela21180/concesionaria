// 8) Escriba un algoritmo que liste los numeros primos entre 1 y 100, preguntando al usuario como desea encolumnarlos.

let readlineSync = require('readline-sync');


let ubicacion = 0;
while (ubicacion != 1 && ubicacion != 2 ) {
    ubicacion = pedirUbicacion();
}

console.log(formatearTexto("Primos", 8, " "), formatearTexto("Cuadrado", 8, " "), formatearTexto("Cubo", 8, " "));
    
for (let i = 1; i<=100; i++) {
    let cantidad = 1;
    for(let j=2; j<=i;j++) {
        if (esMultiplo(i, j)) {
            cantidad++;
        }
    }
    if (cantidad == 2 ) {
        let nro = i;
        let cuadrado = Math.pow(nro,2);
        let cubo = Math.pow(nro,3);
        console.log(formatearTexto(nro.toString(), 8, " "), formatearTexto(cuadrado.toString(), 8, " "), formatearTexto(cubo.toString(), 8, " "));
    
    }
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

function esMultiplo(nro, nro2) {
    return ((nro%nro2) == 0);
}