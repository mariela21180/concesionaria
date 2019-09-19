// Variables
let alertContainer = document.querySelector('#alert');
let fomulario = document.querySelector('#fomulario');
let acciones = document.querySelector('#acciones');
let btnNuevoVehiculo = document.querySelector('#btnNuevoVehiculo');
let btnVehiculos = document.querySelector('#btnVehiculos');
let btnAutos = document.querySelector('#btnAutos');
let btnCamionetas = document.querySelector('#btnCamionetas');
let btnVehiculoId = document.querySelector('#btnVehiculoId');
let inputTipo = document.querySelector('#tipo');
let inputMarca = document.querySelector('#marca');
let inputModelo = document.querySelector('#modelo');
let inputAnio = document.querySelector('#anio');
let inputPrecio = document.querySelector('#precio');
let inputKilometraje = document.querySelector('#kilometraje');
let inputCapacidad = document.querySelector('#capacidad');
let inputPatente = document.querySelector('#patente');
let inputPuertas = document.querySelector('#puertas');
let inputAirbags = document.querySelector('#airbags');
let inputFuncionaOk = document.querySelector('#funcionaOk');
let btnAceptar = document.querySelector('#btnAceptar');
let btnCancelar = document.querySelector('#btnCancelar');
let tblVehiculos = document.querySelector('#tblVehiculos');
let posicion = document.querySelector('#posicion');
let vehiculos = [];

// Eventos
btnNuevoVehiculo.addEventListener("click", agregarVehiculo);
btnVehiculos.addEventListener("click", load);
btnAutos.addEventListener("click", load);
btnCamionetas.addEventListener("click", load);
btnVehiculoId.addEventListener("click", mostrarVehiculo);
btnAceptar.addEventListener("click", guardarVehiculo);
btnCancelar.addEventListener("click", cancelar);

// Main
ocultarFormulario();




// Metodos publico

async function load() {
    try {
        let r = null;
        let id = posicion.value;
        if (id) {
            r = await fetch(`/vehiculos/${posicion.value}`);

        } else {
            if (this.id == "btnVehiculos") {
                r = await fetch("/vehiculos");                
            } else if (this.id == "btnAutos") {
                r = await fetch("/vehiculos/autos");                
            } else if (this.id == "btnCamionetas") {
                r = await fetch("/vehiculos/camionetas");                
            } else {
                r = await fetch("/vehiculos");   
            }
        }
        let json = await r.json();
        vehiculos = json;
        mostrarTablaVehiculos();
    } catch (e) {
        alert(e.message);
    }
}

async function agregarAServidor(registro) {
    let r = await fetch("/vehiculos", { "method": "POST", "headers": { "Content-Type": "application/json" }, "body": JSON.stringify(registro)})
    return (r.ok);
}

function agregarVehiculo() {
    mostrarFormulario();
}

function mostrarVehiculo() {
    const alert = `<div class="alert alert-danger alert-dismissible" role="alert">
        Debe completar el Id para continuar.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`;

    let id = posicion.value;

    if (!id) {
        alertContainer.innerHTML = alert;
        posicion.classList.add('is-invalid'); 
        return false;
    } else {
        load();
        alertContainer.innerHTML = "";
        posicion.value = "";
        return true;
    }
}

function guardarVehiculo() {
    if (validarCampos()) {
        let json = crearJSONdeCampos();
        console.log(json);
        if (agregarAServidor(json)) {
            load();
        }
        else {
            alert ("Error grabando en servidor");
        }
        limpiarCampos()
        ocultarFormulario();
    }
}

function editarPosicion() {
    console.log("Funcion Editar Posicion");
    let posicion = this.getAttribute("idx");
    console.log(posicion);
    // let datos = this.getAttribute("datos").split(',');
    // document.querySelector('#producto').value=datos[0];
    // document.querySelector('#precio').value=datos[1];
    // document.querySelector('#descripcion').value=datos[2];
    // document.querySelector('#iva').value=datos[3];
}
function eliminarPosicion() {
    console.log("Funcion Eliminar Posicion");
    let posicion = this.getAttribute("idx");
    console.log(posicion);
    // if (!eliminarDeServidor("", posicion)) 
    //     alert ("Error eliminando en servidor");
    // load();
}

function cancelar() {
    limpiarCampos();
    ocultarFormulario();
}


// Metodos privados

function mostrarFormulario() {
    limpiarValidacion();
    fomulario.style.display = "flex";
    acciones.style.display = "none";
}
function ocultarFormulario() {
    fomulario.style.display = "none";
    acciones.style.display = "flex";
    limpiarValidacion();
}
function limpiarCampos() {
    inputTipo.value = "";
    inputMarca.value = "";
    inputModelo.value = "";
    inputAnio.value = "";
    inputPrecio.value = "";
    inputKilometraje.value = "";
    inputCapacidad.value = "";
    inputPatente.value = "";
    inputPuertas.value = "";
    inputPuertas.value = "";
    inputAirbags.value = "";
    inputFuncionaOk.value = "";
}
function limpiarValidacion() {    
    alertContainer.innerHTML = "";
    inputTipo.classList.remove('is-invalid');
    inputTipo.classList.remove('is-valid');
    inputMarca.classList.remove('is-invalid');
    inputMarca.classList.remove('is-valid');
    inputModelo.classList.remove('is-invalid');
    inputModelo.classList.remove('is-valid');
    inputAnio.classList.remove('is-invalid');
    inputAnio.classList.remove('is-valid');
    inputPrecio.classList.remove('is-invalid');
    inputPrecio.classList.remove('is-valid');
    inputKilometraje.classList.remove('is-invalid');
    inputKilometraje.classList.remove('is-valid');
    inputCapacidad.classList.remove('is-invalid');
    inputCapacidad.classList.remove('is-valid');
    posicion.classList.remove('is-invalid'); 
}

function validarCampos() {
    const alert = `<div class="alert alert-danger alert-dismissible" role="alert">
        Debe completar al menos los campos Tipo, Marca, Modelo, Anio, Precio, Kilometraje y Capacidad para continuar.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`;
    if (!inputTipo.value || !inputMarca.value || !inputModelo.value || !inputAnio.value || !inputPrecio.value || !inputKilometraje.value || !inputCapacidad.value) {
        alertContainer.innerHTML = alert;
        if (!inputTipo.value) {
            inputTipo.classList.add('is-invalid'); 
        } else {
            inputTipo.classList.remove('is-invalid');
            inputTipo.classList.add('is-valid');
        } 
        if (!inputMarca.value) {
            inputMarca.classList.add('is-invalid'); 
        } else {
            inputMarca.classList.remove('is-invalid');
            inputMarca.classList.add('is-valid');
        } 
        if (!inputModelo.value) {
            inputModelo.classList.add('is-invalid'); 
        } else {
            inputModelo.classList.remove('is-invalid');
            inputModelo.classList.add('is-valid');
        } 
        if (!inputAnio.value) {
            inputAnio.classList.add('is-invalid'); 
        } else {
            inputAnio.classList.remove('is-invalid');
            inputAnio.classList.add('is-valid');
        } 
        if (!inputPrecio.value) {
            inputPrecio.classList.add('is-invalid'); 
        } else {
            inputPrecio.classList.remove('is-invalid');
            inputPrecio.classList.add('is-valid');
        } 
        if (!inputKilometraje.value) {
            inputKilometraje.classList.add('is-invalid'); 
        } else {
            inputKilometraje.classList.remove('is-invalid');
            inputKilometraje.classList.add('is-valid');
        } 
        if (!inputCapacidad.value) {
            inputCapacidad.classList.add('is-invalid'); 
        } else {
            inputCapacidad.classList.remove('is-invalid');
            inputCapacidad.classList.add('is-valid');
        } 
        return false;
    } else {
        limpiarValidacion();
        return true;
    }
}

function crearJSONdeCampos() {
    return {
        "tipo": inputTipo.value,
        "data": {
            "marca": inputMarca.value,
            "modelo": inputModelo.value,
            "anio": inputAnio.value,
            "precio": inputPrecio.value,
            "kilometraje": inputKilometraje.value,
            "capacidad": inputCapacidad.value,
            "patente": inputPatente.value,
            "puertas": inputPuertas.value,
            "airbags": inputAirbags.value,
            "funcionaOk": inputFuncionaOk.value
        }
    }
}

function mostrarTablaVehiculos() {
    limpiarValidacion();
    let vehiculo = "";
    let html = "";
    if (vehiculos.length > 1) {
        for (let i = 0; i < vehiculos.length; i++) {
            const r = vehiculos[i];
            vehiculo = r;
            html += filaTablaVehiculo(vehiculo);
        }
    } else {
        console.log(vehiculos);
        vehiculo = vehiculos;
        html = filaTablaVehiculo(vehiculo);
    }
    tblVehiculos.innerHTML = html;
        
    let btnsEliminar = document.querySelectorAll(".btnElimPorPos");
    let btnsEditar = document.querySelectorAll(".btnEditPorPos");
    btnsEditar.forEach(b => {b.addEventListener("click", editarPosicion)});
    btnsEliminar.forEach(a => {a.addEventListener("click", eliminarPosicion)});
}

function filaTablaVehiculo(vehiculo) {    
    let tipo = "";
    let html = "";
    if (vehiculo["capacidadBaul"]) {
        tipo = "Auto";
    } else if (vehiculo["capacidadCarga"]) {
        tipo = "Camioneta";
    }
    html += `
    <tr>
    <td>${tipo}</td>
    <td>${vehiculo.marca}</td>
    <td>${vehiculo.modelo}</td>
    <td>${vehiculo.anio}</td>
    <td>${vehiculo.precio}</td>
    <td>${vehiculo.kilometraje}</td>
    <td>${vehiculo.capacidad}</td>
    <td>${vehiculo.patente}</td>
    <td>${vehiculo.puertas}</td>
    <td>${vehiculo.airbags}</td>
    <td>${vehiculo.funcionaOk}</td>
    <td><button type="button" class="btnElimPorPos btn-sm btn-danger mr-1" idx=${vehiculo.patente}><i class="fa fa-trash"></i></button><button type="button" class="btnEditPorPos btn-sm btn-primary" idx=${vehiculo.patente}><i class="fa fa-pencil"></i></button></td>
    </tr>
    `;
    return html;
}





