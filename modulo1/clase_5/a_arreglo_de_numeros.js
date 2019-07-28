let num = new Array(7);
num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;

// num = [20,14,8,0,5,19,24]; otra opcion de inicializar

let s = "";
for (let i = 0; i<7; i++) {
    s = s + num[i] + " ";
    console.log(num[i]);
}
console.log("El arreglo contiene los numeros:\n"+s);
console.log(num);