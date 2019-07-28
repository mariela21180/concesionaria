let lim = 10;
let a = new Array(lim);
cargar(a, lim, 100);
escribirEnUnaLinea(a, lim);
burbuja(a, lim);
escribirEnUnaLinea(a, lim);

function cargar(arreglo, cantidad, numAzar) {
    let i;
    for (i = 0; i < cantidad; i++) {
        arreglo[i] = azar(numAzar);
    }
}

function azar(numero) {
    return Math.floor(Math.random() * numero);    
}
function escribirEnUnaLinea(arreglo, cantidad) {
    let i;
    let cadena = "";
    for (i = 0; i < cantidad; i++) {
        cadena = cadena + arreglo[i] + " ";
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

function burbuja(arreglo, cantidad) {
    let i, j;
    for (i = 2; i < cantidad; i++) {
        for (j = 0; j < cantidad-1; j++) {
            if (comparar(arreglo, j, j + 1) == 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}