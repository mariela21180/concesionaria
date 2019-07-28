// Dados un arreglo de texto y dos arreglos de enteros de tamaño n:
// • nombres Como Texto
// • años Como Entero y altura Como Entero
// Ordénelos los tres vectores a la vez según los años, y en caso que haya un empate, utilice la altura para desempatar
// Tener en cuenta que los intercambios tienen que cambiar los elementos de los tres vectores a la vez

let n = 10;
let nombresAzar = new Array(n);
let añosAzar = new Array(n);
let alturaAzar = new Array(n);

// Cargo arreglos y los muestro por consola
nombresAzar = [
    "Mariela",
    "Jose",
    "Pedro",
    "Pablo",
    "Luis",
    "Mauricio",
    "Amadeo",
    "Andres",
    "Andrea",
    "Ana"
]
cargar(añosAzar, n, 80);
cargar(alturaAzar, n, 200);

console.log("Arreglos al azar");
escribirEnUnaLinea(nombresAzar);
escribirEnUnaLinea(añosAzar);
escribirEnUnaLinea(alturaAzar);

// creo nuevos arreglos para trabajar los ordenamientos sin tocar el orden original
let nombres = new Array(n);
let años = new Array(n);
let altura = new Array(n);

// cargo los arreglos a ordenar con los valores de los arreglos orgiginales
nombres = nombresAzar;
años = añosAzar;
altura = alturaAzar;

// ordeno por burbujeo y muestro resultado
console.log("\nArreglos ordenados por burbujeo:");
ordenarBubbleSort(n, años, altura, nombres);
escribirEnUnaLinea(nombres);
escribirEnUnaLinea(años);
escribirEnUnaLinea(altura);

// cargo de nuevo los arreglos a ordenar con los valores de los arreglos orgiginales
nombres = nombresAzar;
años = añosAzar;
altura = alturaAzar;

// ordeno por seleccion y muestro resultado
console.log("\nArreglos ordenados por seleccion:");
ordenarSelectionSort(n, años, altura, nombres);
escribirEnUnaLinea(nombres);
escribirEnUnaLinea(años);
escribirEnUnaLinea(altura);

// FUNCIONES **********************************************************/
function ordenarBubbleSort(n, años, altura, nombres){    
    let i, j;
    for (i = 2; i < n; i++) {
        for (j = 0; j < n-1; j++) {
            if (comparar(años, j, j + 1) == 1) {
                intercambiar(años, j, j + 1);
                intercambiar(altura, j, j + 1);
                intercambiar(nombres, j, j + 1);
            } else if (comparar(años, j, j + 1) == 0) {
                if (comparar(altura, j, j + 1) == 1) {
                    intercambiar(años, j, j + 1);
                    intercambiar(altura, j, j + 1);
                    intercambiar(nombres, j, j + 1);
                }
            }
        }
    }
}
function ordenarSelectionSort(n, años, altura, nombres){    
    let i, j, posicion;
    for (i = 0; i < n - 1; i++) {
        posicion = i;
        for (j = i + 1; j < n; j++) {
            let comparacion = comparar(años, posicion, j);
            if ((comparacion == 1) || (comparacion == 0)) {
                if (comparacion == 1) {
                    posicion = j;
                } else if (comparacion == 0) {
                    if (comparar(altura, posicion, j) == 1)  {
                        posicion = j;
                    }
                }
            }
        }
        intercambiar(años, i, posicion);
        intercambiar(altura, i, posicion);
        intercambiar(nombres, i, posicion);
    }
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
        cadena = cadena + formatearTexto(arreglo[i].toString(), 12, " ", 1) + " ";
    }
    console.log(cadena);
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


function dibujarCaracteres(largo, caracter) {
    let caracteres = "";
    for (let i = 0; i<largo; i++) {
        caracteres = caracteres + caracter;
    }
    return caracteres;
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