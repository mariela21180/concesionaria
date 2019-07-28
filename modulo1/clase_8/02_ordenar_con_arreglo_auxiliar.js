// Ordenar con Arreglo Auxiliar
// • Desarrollar un programa que permita ordenar un arreglo “a” de tamaño “n” sin modificarlo, es decir, sin hacer los intercambios sobre la estructura “a”
// • Utilizar un arreglo auxiliar “aux” cargado con los índices del arreglo “a” (de 0 a n)
// • El ordenamiento tiene que hacerse mirando los valores de “a” pero haciendo los intercambios en “aux”
// • Crear un método que permita imprimir ordenado que reciba como parámetros “a”, “aux” y “n”

let a, n, aux;
n = 5;
a = new Array(n);
aux = new Array(n);
for (let i=0; i<n; i++){
    aux[i] = i;
}
cargar(a, n, 80);
escribirEnUnaLinea(a);
ordenarConAuxiliar(n, a, aux);



// Metodos *************************************************/
function imprimirOrdenado(arreglo, aux, n) {
    // let i;
    // let cadena = "";
    // for (i = 0; i < arreglo.length; i++) {
    //     cadena = cadena + formatearTexto(arreglo[i].toString(), 4, " ", 1) + " ";
    // }
    // console.log(cadena);
}
function ordenarConAuxiliar(n, arreglo, aux) {
    let i, j, posicion;
    for (i = 0; i < n - 1; i++) {
        posicion = i;
        for (j = i + 1; j < n; j++) {
            let comparacion = comparar(arreglo, posicion, j);
            if (comparacion == 1) {
                posicion = j;
            }
        }
    }
    intercambiar(aux, i, posicion);
}
function intercambiar(arreglo, i, j) {
    let aux;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

function comparar(arreglo, i, j) {
    let comparacion;
    if (arreglo[i] == arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}
function cargar(arreglo, cantidad, numAzar) {
    let i;
    for (i = 0; i < cantidad; i++) {
        arreglo[i] = azar(numAzar);
    }
}
function azar(numero) {
    return Math.floor(Math.random() * numero);    
}
function escribirEnUnaLinea(arreglo) {
    let i;
    let cadena = "";
    for (i = 0; i < arreglo.length; i++) {
        cadena = cadena + formatearTexto(arreglo[i].toString(), 4, " ", 1) + " ";
    }
    console.log(cadena);
}
/**
 * 
 * @param {texto a formatear} texto 
 * @param {el tamanio total a devolver} tamaño 
 * @param {el caracter de relleno} caracter 
 * @param {1: alinear a la izquierda, 2: alinear a la derecha} ubicacion 
 */
function formatearTexto(texto, tamaño, caracter, ubicacion){       
    let totalRelleno = tamaño - texto.length;
    let relleno = dibujarCaracteres(totalRelleno, caracter);     
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
    return textoFormateado.concat(cadena1, cadena2);
}
function dibujarCaracteres(largo, caracter) {
    let caracteres = "";
    for (let i = 0; i<largo; i++) {
        caracteres = caracteres + caracter;
    }
    return caracteres;
}