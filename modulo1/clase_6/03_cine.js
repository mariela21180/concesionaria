// • Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay
// • Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
// • La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
// • La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada

let capacidad = 50;
let butacas = Array(capacidad);
for (let i = 0; i<capacidad; i++) {
    butacas[i] = Math.random() < 0.5;
}
console.log(butacas);
let vacias = 0;
for (let i = 0; i<capacidad; i++) {
    if (!butacas[i])
    vacias++;
}
console.log("Hay " + vacias + " butacas vacias");