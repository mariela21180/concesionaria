// Métodos de Ejercicio 1 -------------------------------

let total = 0;
let dato1 = document.querySelector('#in-dato1');
let operacion = document.querySelector('#in-operacion');
let dato2 = document.querySelector('#in-dato2');
let validation = document.querySelector('#validation');

function obtenerOperacion() {
  return operacion.value;
}

function obtenerDato1() {
  return dato1.value;
}

function obtenerDato2() {
  return dato2.value;
}

function calcularTotal(d1, op, d2) {
  return eval(d1 + op + d2);
}

function limpiarCampos() {
  dato1.value = "";
  operacion.value = "";
  dato2.value = "";
  dato1.focus();
}

function agregar() {
  var d1 = obtenerDato1();
  var op = obtenerOperacion();
  var d2 = obtenerDato2();
  var resultado = "";

  if (d1 != "" && d1 != undefined && op != "" && op != undefined && d2 != "" && d2 != undefined) {
    //Oculto el mensaje de error
    validation.classList.add('d-none');

    //Calculo resultado


    //Creo los nodos que necesito agregar al DOM
    var row = document.createElement("tr"); // Creo una fila
    var cell1 = document.createElement("td"); // Creo una celda
    var cell2 = document.createElement("td"); // Creo una celda
    var cell3 = document.createElement("td"); // Creo una celda
    var cell4 = document.createElement("td"); // Creo una celda

    //Creo los nodos de textos a agregar en los elementos recien creados
    var textcell1 = document.createTextNode(d1); // Create a text node
    var textcell2 = document.createTextNode(op); // Create a text node
    var textcell3 = document.createTextNode(d2); // Create a text node
    var textcell4 = document.createTextNode(calcularTotal(d1, op, d2)); // Create a text node

    //Agrego los textos a las celdas
    cell1.appendChild(textcell1);
    cell2.appendChild(textcell2);
    cell3.appendChild(textcell3);
    cell4.appendChild(textcell4);

    //Agrego las celdas a la fila
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    //Agrego la fila a la tabla
    document.querySelector('#lista-calculos').appendChild(row);

    //limpio los campos y hago foco en el campo 1
    limpiarCampos();
  } else {
    //Muestro el mensaje de error
    validation.classList.remove('d-none');
    validation.innerHTML = "Debe completar los tres campos primero";
  }
}