import * as fs from 'fs'; 
import * as readlineSync from './node_modules/readline-sync';

/**
 * El criterio que uso para saber donde va a votar es alfabético.
 * Divido las letras del alfabeto por la cantidad de colegios 
 * Segun la inicial del nombre veo en que colegio iria
 **/

let nombres: string[] = leerArchivo('nombres.txt');
let colegios: string[] = leerArchivo('colegios.txt');
let alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split('');
let division: number =  Math.trunc(alphabet.length / colegios.length);


console.log("Nombres:",nombres);
console.log("Colegios:",colegios);
console.log("Division:",division);


let nombre: string = readlineSync.question("Ingrese nombre: ");
try {

    if (buscarNombre(nombre) === -1) {
        console.log("El nombre ingresado no existe.")
    } else {
        let position: number = getNamePosition(nombre);
        console.log("Posicion: ", position);
        for (let i = 0; i<colegios.length; i++) {
            if ((position >= (division*i)) && (position < division*(i+1))) {
                console.log(nombre, "vota en el colegio", colegios[i]);
            }
        }
    }
} catch (err) {
    console.log(err.message);
}


// Metodos --------------------------------------------------

function getNamePosition(nombre: string): number {
    let inicial: string = (nombre.substr(0,1)).toLowerCase();
    return alphabet.indexOf(inicial);    
}

function buscarNombre(nombre: string): number {
    if (nombre == "" || nombre == undefined) {
        throw Error("El nombre no puede estar vacio")
    }
    return nombres.indexOf(nombre);
}

function leerArchivo(rutaArchivo: string): string[] {    
    if (rutaArchivo == "") {
        throw Error("La ruta no puede estar vacia")
    }
    let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    
    let lineas: string[] = archivo.split('\n');
    lineas = lineas.map(linea => linea.replace('\r', ''));

    return lineas;
}



