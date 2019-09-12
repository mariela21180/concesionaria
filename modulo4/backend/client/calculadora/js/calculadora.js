// Variables -------------------------------------------------
let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", agregar);
let operaciones = [];


// Main ------------------------------------------------------

// load();


// Methods ---------------------------------------------------

async function load() {
  try {
    let r = await fetch(`/calcular/${p[0]}/${p[1]}/${p[2]}`);
    let json = await r.json();
    operaciones = json;
    //Comun a ambas versiones arma el html de la tabla
    mostrarTablaOperaciones();
  } catch (err) {
    alert(err.message);
  }
}

async function agregar() {
  console.log("Funcion Agregar");
  let alertContainer = document.querySelector('#alert');
  let alert = `<div class="alert alert-danger alert-dismissible" role="alert">
  Debe completar todos los campos para continuar.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
  </button>
</div>`;
  let operando1 = document.querySelector('#operando1');
  let operador = document.querySelector('#operador');
  let operando2 = document.querySelector('#operando2');
  let ope1Val = operando1.value;
  let operVal = operador.value;
  let ope2Val = operando2.value;
  if (ope1Val && operVal && ope2Val) {
    alertContainer.innerHTML = "";
    let resultado = await fetch(`/calcular/${operVal}/${ope1Val}/${ope2Val}`);
    console.log(resultado);
    let json = await resultado.json();
    console.log(json);
    let renglon = {
      "operando1": ope1Val,
      "operador": operVal,
      "operando2": ope2Val,
      "resultado": json.resultado
    }
    operando1.value = "";
    operador.value = "";
    operando2.value = "";
    operaciones.push(renglon);
    mostrarTablaOperaciones();
  } else {
    alertContainer.innerHTML = alert;
  }
}

function mostrarTablaOperaciones() {
  let html = "";
  for (let r of operaciones) {
    console.log(r);
    html += `
    <tr>
    <td>${r.operando1}</td>
    <td>${r.operador}</td>
    <td>${r.operando2}</td>
    <td>${r.resultado}</td>
    </tr>
    `;
  }
  document.querySelector("#tblOperaciones").innerHTML = html;
}
