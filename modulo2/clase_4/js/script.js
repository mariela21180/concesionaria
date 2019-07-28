// Métodos de teoría -------------------------------

function saludar() {
    console.log("Hola!!!!");
    alert("Hola!")
}

let contador = 0;

function contarClicks() {
    contador++;
    console.log("Hiciste click", contador, "veces!!!!");
}

function saludarConNombre() {
    var nombre = document.querySelector('#in-nombre').value;
    console.log(nombre);
    if (nombre != "") {
        document.querySelector('#saludo').innerHTML = "Hola \<b>" + nombre + "\</b>!!!!";
    } else {
        document.querySelector('#saludo').innerHTML = "Falta completar el nombre";
    }
}

// Métodos de Ejercicio 1 -------------------------------

let resultado = 0;
let cantidad;

function sumarUno() {
    resultado++;
    mostrarResultado();
}

function restarUno() {
    resultado--;
    mostrarResultado();
}

function sumarCantidad() {
    cantidad = obtenerCantidad();
    if (cantidad != "" && cantidad != undefined) {
        resultado = resultado + parseInt(cantidad);
        mostrarResultado();
    } else {
        alert("Debe ingresar una cantidad primero");
    }
}

function obtenerCantidad() {
    return document.querySelector('#in-cantidad').value;
}

function actualizarCantidad() {
    document.querySelector('#cantidad').innerHTML = obtenerCantidad();
}

function mostrarResultado() {
    document.querySelector('#resultado').innerHTML = resultado;
}

// Métodos de Ejercicio 2 -------------------------------

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function simularDados() {
    let totalSietes = 0;
    let dado1;
    let dado2;
    let suma;
    for (let i = 0; i < 1000; i++) {
        dado1 = getRandomInt(6);
        dado2 = getRandomInt(6);
        suma = dado1 + dado2;

        if (suma == 7) {
            totalSietes++;
        }
    }

    document.querySelector('#total-siete').innerHTML = "El número 7 salió " + totalSietes + " veces.";
}


// Métodos de Ejercicio 3 -------------------------------
let total = 0;

function obtenerCompra() {
    return document.querySelector('#in-compra').value;
}

function obtenerMonto() {
    return document.querySelector('#in-monto').value;
}

function limpiarCampos() {
    document.querySelector('#in-compra').value = "";
    document.querySelector('#in-monto').value = "";
    document.querySelector('#in-compra').focus();
}

function agregar() {
    var compra = obtenerCompra();
    var monto = obtenerMonto();

    if (compra != "" && compra != undefined && monto != "" && monto != undefined) {
        var node = document.createElement("LI"); // Create a <li> node
        var textnode = document.createTextNode(compra + ": $" + monto); // Create a text node
        node.appendChild(textnode);
        document.querySelector('#lista-compras').appendChild(node);
        total = total + parseInt(monto);
        limpiarCampos();
    } else {
        alert("Debe ingresar una compra y monto primero");
    }
}

function mostrarTotal() {
    document.querySelector('#total').innerHTML = total;
}