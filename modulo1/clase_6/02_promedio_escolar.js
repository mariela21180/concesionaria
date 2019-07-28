// Promedio Escolar
// • Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
// • Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
// • Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información

let readlineSync = require('readline-sync');
let nombre = new Array();
let nota1 = new Array();
let nota2 = new Array();
let nota3 = new Array();
let promedio = new Array();
let opcion = -1;

while(opcion != 0) {
    opcion = mostrarMenu();

    if (opcion == 1) {
        console.log("Opcion 1 ingresada.");
        cargarNotas(nombre, nota1, nota2, nota3, promedio);
        console.log(nombre, nota1, nota2, nota3, promedio);
    } else if (opcion == 2) {
        console.log("Opcion 2 ingresada.");
        obtenerPromedio(nombre, promedio);
    } 
    
}
console.log("Ha salido del sistema.");





///////////////////////////////////////////////////////////

function cargarNotas(nombre, nota1, nota2, nota3, promedio) {
    let nombreIngresado = preguntarCadena("Ingrese el nombre del alumno");
    nombre.push([nombreIngresado]);
    let indice = buscarAlumno(nombre, nombreIngresado);
    
    nota1[indice] = preguntarNumero("Ingrese la nota del 1er trimestre");
    nota2[indice] = preguntarNumero("Ingrese la nota del 2do trimestre");
    nota3[indice] = preguntarNumero("Ingrese la nota del 3er trimestre");
    promedio[indice] = (nota1[indice]+nota2[indice]+nota3[indice])/3;
}
function buscarAlumno(v, nombre) {
    for (let i=0; i<v.length;i++) {
        if (v[i] == nombre) {
            return i;
        }
    }
    return -1;
}
function obtenerPromedio(nombre, promedio) {
    let nombreBuscado = preguntarCadena("Ingrese el nombre del alumno");
    let indice = buscarAlumno(nombre, nombreBuscado);
    if (indice != -1) {
        console.log("El promedio de " + nombreBuscado + " es: " + promedio[indice]);
    } else {
        console.log("El nombre no existe, por favor intente nuevamente.");
    }
}

function mostrarMenu() {    
    opcion = readlineSync.questionInt("Elija una opcion para continuar:\n1) Cargar Notas\n2) Obtener Promedio\n0) Salir\nOpcion: ");
    if (opcion != 1 && opcion != 2 && opcion != 0) {
        console.log("Ingrese una opcion valida.")
    }
    return opcion;
}


function preguntarNumero(pregunta) {
    return readlineSync.questionInt(pregunta + ": ");
}

function preguntarCadena(pregunta) {
    return readlineSync.question(pregunta + ": ");
}