// Variables -------------------------------------------------
let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);
let compras = [];


// Main ------------------------------------------------------

load();


// Methods ---------------------------------------------------

async function load() {
  let response = await fetch("./data/compras.json");  
  let json = await response.json(); 
  compras = json.compras;
  mostrarTablaCompras();
}

function agregar() {
  console.log("Funcion Agregar");
  let alertContainer = document.querySelector('#alert');
  let alert = `<div class="alert alert-danger alert-dismissible" role="alert">
  Debe completar Producto y Precio para continuar.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
  </button>
</div>`;
  let producto = document.querySelector('#producto');
  let precio = document.querySelector('#precio');
  let prodVal = producto.value;
  let preVal = parseInt(precio.value);
  if (prodVal && preVal) {
    alertContainer.innerHTML = "";
    let renglon = {
      "producto": prodVal,
      "precio": preVal
    }
    producto.value = "";
    precio.value = "";
    compras.push(renglon);
    mostrarTablaCompras();
  } else {
    alertContainer.innerHTML = alert;
  }
}

function sumar() {
  console.log("Funcion Sumar");
  let total = 0;
  for (let i = 0; i < compras.length; i++) {
    total += compras[i].precio;
  }
  let max = compras[0].precio;
  for (let r of compras) {
    if (max < r.precio)
      max = r.precio;
  }
  document.querySelector("#total").innerHTML =
    "<div class='col text-center'><strong>Total: $" + total + "</strong></div>" +
    "<div class='col text-center'><strong>Maximo: $" + max + "</strong></div>"
}

function mostrarTablaCompras() {
  let html = "";
  for (let r of compras) {
    html += `
    <tr>
    <td>${r.producto}</td>
    <td>${r.precio}</td>
    </tr>
    `;
  }
  document.querySelector("#tblCompras").innerHTML = html;
}