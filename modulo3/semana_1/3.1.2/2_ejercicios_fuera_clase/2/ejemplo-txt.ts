import * as fs from 'fs'; 

let texto: string = fs.readFileSync('abc.txt', 'utf8');


let colores: string[][] = new Array();
let lineas: string[] = texto.split('\n');
lineas = lineas.map(linea => linea.replace('\r', ''));

console.log("Lineas: ",lineas);
let aux: string[];
for (let i: number = 0; i<lineas.length; i++) {
    aux = lineas[i].split(',');
    colores.push(aux);
}

console.log("Matriz: ",colores);
