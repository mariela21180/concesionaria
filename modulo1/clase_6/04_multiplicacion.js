// • Implemente un método llamado “multiplicarArreglo” que recibe como parámetros tres arreglos de Enteros del mismo tamaño
// • Los dos primeros arreglos contienen los números que se quieren multiplicar
// • El tercer arreglo almacena el cálculo de la multiplicación de cada posición de los dos arreglos
// • Utilice este método para multiplicar los siguientes cuatro arreglos de tres elementos

let largo = 3;
let arreglo1 = Array[largo];
let arreglo2 = Array[largo];
let arreglo3 = Array[largo];
let arreglo4 = Array[largo];
let arregloFinal = Array[largo];

arreglo1 = [1, 2, 3];
arreglo2 = [4, 5, 6];
arreglo3 = [2, 1, 2];
arreglo4 = [1, 2, 1];
arregloFinal = [0, 0, 0];

multiplicarArreglo(arreglo1, arreglo2, arregloFinal);
multiplicarArreglo(arreglo3, arregloFinal, arregloFinal);
multiplicarArreglo(arreglo4, arregloFinal, arregloFinal);

console.log(arregloFinal);

function multiplicarArreglo(arreglo1, arreglo2, arregloFinal) {
    for (let i = 0; i<largo;i++) {
        arregloFinal[i] = arreglo1[i] * arreglo2[i];
    }
}
