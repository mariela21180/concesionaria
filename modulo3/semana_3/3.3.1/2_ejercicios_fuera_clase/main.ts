import RegistroAutomotor from "./RegistroAutomotor";
import * as readlineSync from './node_modules/readline-sync'; 
import Auto from "./Auto";
import Automotor from "./Automotor";
import Moto from "./Moto";
import Camion from "./Camion";

let miRegistroAutomotor: RegistroAutomotor;
let miSegundoRegistroAutomotor: RegistroAutomotor;
let accion: number;

// Probando Clase RegistroAutomotor
console.log('Probando Clase RegistroAutomotor\n');
console.log('Creando Registro desde archivo "info_automotores.txt":');
miRegistroAutomotor = new RegistroAutomotor(1,'Registro Nacional', './info_automotores.txt');
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
    console.log("1) Ingresar automotor");
    console.log("2) Buscar automotor");
    console.log("3) Eliminar automotor");
    console.log("4) Actualizar automotor");
    console.log("0) Salir\n");

    return readlineSync.questionInt("Seleccione una opcion: ");
}


function ejecutar(): void {
    accion = menu();
    
    if (accion === 1) {
        let automotor: Automotor;
        let marca: string = readlineSync.question("Marca: ");
        let modelo: string = readlineSync.question("Modelo: ");
        let combustible: string = readlineSync.question("Combustible: ");
        let año: number = readlineSync.questionInt("Anio: ");
        let patente: string = readlineSync.question("Patente: ");
        let titular: string = readlineSync.question("Titular: ");
        let tipo: number;
        while (tipo != 1 && tipo != 2 && tipo != 3) {
            tipo = readlineSync.questionInt("Tipo de Vehiculo: 1) Auto, 2) Moto, 3) Camion ");

            if (tipo === 1) {
                let asientos: number = readlineSync.questionInt("Asientos: ");
                let airbags: number = readlineSync.questionInt("Airbags: ");
                let puertas: number = readlineSync.questionInt("Puertas: ");
                automotor = new Auto(marca, modelo, combustible, año, patente, titular, asientos, airbags, puertas);
            } else if (tipo === 2) {
                let cilindrada: number = readlineSync.questionInt("Cilindrada: ");
                automotor = new Moto(marca, modelo, combustible, año, patente, titular, cilindrada);
            } else if (tipo === 3) {
                let ejes: number = readlineSync.questionInt("Ejes: ");
                let acoplado: boolean;
                if (readlineSync.questionInt("Acoplado: 0) Sin Acoplado, 1) Con Acoplado") === 0) {
                    acoplado = false;
                } else {
                    acoplado = true;
                }
                automotor = new Camion(marca, modelo, combustible, año, patente, titular, ejes, acoplado);
            }
        }
        miRegistroAutomotor.agregarAutomotor(automotor);

    } else if (accion === 2) {
        let patente: string = readlineSync.question("Ingrese la Patente del automotor a buscar: ");
        let automotor: Automotor = miRegistroAutomotor.burcarAutomotor(patente);
        if (automotor === null) {
            console.log("El automotor no existe en este registro.")
        } else {
            console.log(automotor);
        }
    } else if (accion === 3) {
        let patente: string = readlineSync.question("Ingrese la Patente del automotor a borrar: ");
        miRegistroAutomotor.borrarAutomotor(patente);
    } else if (accion === 4) {
        let patente: string = readlineSync.question("Ingrese la Patente del automotor a actualizar: ");
        let titular: string = readlineSync.question("Ingrese el nombre del nuevo titular: ");
        miRegistroAutomotor.actualizarAutomotor(patente, titular);
    }
    if (accion != 0) {
        console.log(miRegistroAutomotor);
    }
}