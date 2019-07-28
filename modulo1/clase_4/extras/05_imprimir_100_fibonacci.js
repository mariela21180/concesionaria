let cadena = "0\n";
let nMenos1 = 0;
let nMenos2 = 1;
for (let i = 2; i<=100; i++) {
    let fibonacci = nMenos1 + nMenos2
    cadena = cadena + fibonacci +'\n';    
    nMenos2 = nMenos1;
    nMenos1 = fibonacci;
}

console.log('Los primeros 100 Fibonacci son:\n' + cadena);
