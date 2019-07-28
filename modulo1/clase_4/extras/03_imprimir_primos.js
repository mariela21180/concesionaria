let cadena = "";
for (let i = 1; i<=999; i++) {
    let cantidad = 1;
    for(let j=2; j<=i;j++) {
        if (esMultiplo(i, j)) {
            cantidad++;
        }
    }
    if (cantidad == 2 ) {
        cadena = cadena + i+' ';
    }
}


console.log('Los numeros primos entre 1 y 999 son:\n' + cadena);


function esMultiplo(nro, nro2) {
    return ((nro%nro2) == 0);
}