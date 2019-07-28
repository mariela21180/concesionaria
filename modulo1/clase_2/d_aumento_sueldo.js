let readlineSync = require('readline-sync');

let salarioActual = readlineSync.questionFloat('Ingrese su salario actual: $');

let aumento = 0;

if ((salarioActual >= 0) && (salarioActual <= 15000) ) {
    aumento = 0.20;
} else if ((salarioActual > 15000) && (salarioActual <= 20000) ) {
    aumento = 0.10;
} else if ((salarioActual > 20000) && (salarioActual <= 25000) ) {
    aumento = 0.10;
}
if (aumento > 0) {
    console.log('Le corresponde un aumento de %' + aumento * 100 + '\nSu nuevo salario es de $' + salarioActual * (1 + aumento) );
} else {    
    console.log('No hay aumento');
}


