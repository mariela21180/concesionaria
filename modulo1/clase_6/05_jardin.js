// • El jardín infantil necesita un programa para poder asignar cursos a las aulas
// • Se cuentan con tres aulas: Azul, Verde y Amarilla
// • Cada aula cuenta con una capacidad diferente (es decir, un número de bancos)
// • La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
// • Dado un número de infantes ingresado por el usuario, el programa deberá determinar el aula que minimice la cantidad de bancos vacíos
// • La salida del algoritmo es el color que identifica al aula asignada

let readlineSync = require('readline-sync');
let personas, cantidadSalas, capacidadSalas, capacidadMaxima, salaAsignada, indice, coloresSalas;

cantidadSalas = 3

capacidadSalas = new Array(3);
capacidadSalas[0] = 40;
capacidadSalas[1] = 35;
capacidadSalas[2] = 30;

coloresSalas = new Array(3);
coloresSalas[0] = "Azul";
coloresSalas[1] = "Verde";
coloresSalas[2] = "Amarilla";

capacidadMaxima = calcularSalaMayor(capacidadSalas);
console.log("Capacidad maxima: ",capacidadMaxima);
console.log("Las salas disponibles son:");
console.log(coloresSalas);
console.log(capacidadSalas);

personas = 0;
while (personas <=0 || personas>capacidadMaxima ) {
    personas = readlineSync.question('Ingrese la cantidad de personas del curso a asignar: ');
    if (personas <=0 || personas>capacidadMaxima) {
        console.log("La cantidad debe ser mayor a 0 y menor a " + capacidadMaxima);
    }    
}

salaAsignada = asignarSala ( personas , capacidadMaxima, capacidadSalas, cantidadSalas);

console.log("Conviene asignar la sala ", coloresSalas[salaAsignada], " porque sólo quedan ", capacidadSalas[salaAsignada] - personas, " sillas vacías");


// Metodos *************************************************************/
function calcularSalaMayor ( capacidadSalasDada) {
    let salaMayorRetorno = -1;
    for (let i=0; i<capacidadSalasDada.length;i++) {
        if (capacidadSalasDada[i]>salaMayorRetorno) {
            salaMayorRetorno = capacidadSalasDada[i];
        }
    }
    return salaMayorRetorno;
}

function asignarSala ( personasDadas, capacidadMaximaDada, capacidadSalasDada, cantidadSalasDada)	{
	let indiceMejorAula, indice, bancosVacios;
	indiceMejorAula = -1;
	bancosVacios = capacidadMaximaDada;
	for (indice = 0; indice<cantidadSalasDada; indice++) {
        if(capacidadSalasDada[indice] >= personasDadas) {
			if(capacidadSalasDada[indice] - personasDadas < bancosVacios) {
				indiceMejorAula = indice;
				bancosVacios = capacidadSalasDada[indice] - personasDadas;
            }
        }
    }	
    return indiceMejorAula;
}