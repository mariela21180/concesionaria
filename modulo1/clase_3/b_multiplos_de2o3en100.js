let menor = 1;
let mayor = 100;

let mul2 = "";
let mul3 = "";
let mul2y3 = "";

for (let index = menor; index <= mayor; index++) {
    if ( (index%2 == 0) && (index%3 != 0) ) {
        mul2 += index + " ";
    } else if ( (index%2 != 0) && (index%3 == 0) ) {
        mul3 += index + " ";
    }  else if ( (index%2 == 0) && (index%3 == 0) ) {
        mul2y3 += index + " ";
    }  
}
console.log("Analizaremos los numeros entre " + menor + " y " +mayor + ".\n"  )
console.log("Los numeros multiplos de 2 son:\n" + mul2)
console.log("Los numeros multiplos de 3 son:\n" + mul3)
console.log("Los numeros multiplos de 2 y de 3 son:\n" + mul2y3)