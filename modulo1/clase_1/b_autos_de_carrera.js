let readlineSync = require('readline-sync');
let vuelta1 = readlineSync.questionFloat('Ingrese el tiempo de la 1er vuelta: ');
let vuelta2 = readlineSync.questionFloat('Ingrese el tiempo de la 2da vuelta: ');
let vuelta3 = readlineSync.questionFloat('Ingrese el tiempo de la 3er vuelta: ');
let vuelta4 = readlineSync.questionFloat('Ingrese el tiempo de la 4ta vuelta: ');

let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let tiempoPromedio = tiempoTotal/4;

console.log('El total de tiempo de la carrera fue de ' + tiempoTotal + ' minutos, y el promedio por cuelta fue de ' + tiempoPromedio + ' minutos.');
