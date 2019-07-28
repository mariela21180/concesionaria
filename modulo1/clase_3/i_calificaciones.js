let readlineSync = require('readline-sync');
let alumno = "alumno";
while (alumno != "") {
    let notaFinal = 0;
    alumno = readlineSync.question("Ingrese el nombre del alumno: ");
    if (alumno != "") {
        for (let index = 1; index <= 3; index++) {
            nota = readlineSync.questionInt("Ingrese la nota " + index +": ");
            
            if ( (nota > 0) && (nota <=10) ) {
                switch (index) {
                    case 1: 
                        nota = nota * 0.1;
                        break;
                    case 2: 
                        nota = nota * 0.5;
                        break;
                    case 3: 
                        nota = nota * 0.4; 
                        break;
                }
                notaFinal += nota;            
            } else {    
                console.log("Error: Las notas deben estar entre 0 y 10.");
                index = 3;
            }
        }
        if (notaFinal != 0) {
            console.log("El alumno " + alumno + " obtuvo una nota final de " + notaFinal);
        }
    }
} 
