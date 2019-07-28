import RegistroAutomotor from "./RegistroAutomotor";
import * as readlineSync from './node_modules/readline-sync'; 
import Auto from "./Auto";

let miRegistroAutomotor: RegistroAutomotor;
let miSegundoRegistroAutomotor: RegistroAutomotor;
let accion: number;

// Probando Clase RegistroAutomotor
console.log('Probando Clase RegistroAutomotor\n');
console.log('Creando Registro desde archivo "info_autos.txt":');
miRegistroAutomotor = new RegistroAutomotor(1,'Registro Nacional', './info_autos.txt');
console.log(miRegistroAutomotor);
console.log('');

console.log('Creando Registro sin archivo:');
miSegundoRegistroAutomotor = new RegistroAutomotor(2,'Registro Provincial');
console.log(miSegundoRegistroAutomotor);
console.log('');


console.log('Trabajando con Registro nro', miRegistroAutomotor.getId(), '"'+ miRegistroAutomotor.getNombre()+'":' );
while (accion != 0) {
    ejecutar();
}



// Metodos -----------------------------------------------------------

function menu(): number {
    console.log("Menu:")
    console.log("1) Ingresar auto");
    console.log("2) Buscar auto");
    console.log("3) Eliminar auto");
    console.log("4) Actualizar auto");
    console.log("0) Salir\n");

    return readlineSync.questionInt("Seleccione una opcion: ");
}


function ejecutar(): void {
    accion = menu();
    if (accion === 1) {
        let marca: string = readlineSync.question("Marca: ");
        let modelo: string = readlineSync.question("Modelo: ");
        let combustible: string = readlineSync.question("Combustible: ");
        let año: number = readlineSync.questionInt("Anio: ");
        let patente: string = readlineSync.question("Patente: ");
        let titular: string = readlineSync.question("Titular: ");
        let auto: Auto = new Auto(marca, modelo, combustible, año, patente, titular);
        miRegistroAutomotor.agregarAuto(auto);
    } else if (accion === 2) {
        let patente: string = readlineSync.question("Ingrese la Patente del auto a buscar: ");
        let auto: Auto = miRegistroAutomotor.burcarAuto(patente);
        if (auto === null) {
            console.log("El auto no existe en este registro.")
        } else {
            console.log(auto);
        }
    } else if (accion === 3) {
        let patente: string = readlineSync.question("Ingrese la Patente del auto a borrar: ");
        miRegistroAutomotor.borrarAuto(patente);
    } else if (accion === 4) {
        let patente: string = readlineSync.question("Ingrese la Patente del auto a actualizar: ");
        let titular: string = readlineSync.question("Ingrese el nombre del nuevo titular: ");
        miRegistroAutomotor.actualizarAuto(patente, titular);
    }
    if (accion != 0) {
        console.log(miRegistroAutomotor);
    }
}