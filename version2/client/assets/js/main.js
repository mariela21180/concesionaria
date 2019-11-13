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
let patenteABuscar = document.querySelector('#patenteABuscar');
let vehiculos = [];
let editar = false;

// Eventos
btnNuevoVehiculo.addEventListener("click", mostrarFormulario);
btnVehiculos.addEventListener("click", load);
btnAutos.addEventListener("click", load);
btnCamionetas.addEventListener("click", load);
btnVehiculoId.addEventListener("click", mostrarVehiculo);
btnAceptar.addEventListener("click", guardarVehiculo);
btnCancelar.addEventListener("click", cancelar);

// Main
ocultarFormulario();

// Metodos publicos

async function load() {
    try {
        let r = null;
        let patenteValue = patenteABuscar.value;
        if (patenteValue) {
            r = await fetch(`/vehiculos/${patenteValue}`);
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
        if (r.status != 404) {
            let json = await r.json();
            if (patenteValue) {
                vehiculos = [];
                vehiculos.push(json);
            } else {
                vehiculos = json;
            }
            mostrarTablaVehiculos();
        } else {
            alert("No se encontró el vehículo. Verifique la patente e intente nuevamente");
        }
    } catch (e) {
        alert(e.message);
    }
}

async function agregarAServidor(registro) {
    let r = await fetch("/vehiculos", { "method": "POST", "headers": { "Content-Type": "application/json" }, "body": JSON.stringify(registro)})
    return (r.ok);
}
async function eliminarDeServidor(patente) {
    try {
        let r = await fetch(`/vehiculos/${patente}`, { "method": "DELETE", "headers": { "Content-Type": "application/json" }});
        if (r.status != 404) {
            load();
        } else {
            alert ("No se encontró el vehículo. Verifique la patente e intente nuevamente");
        }
    } catch (e) {
        alert(e);
    }
}
async function actualizarEnServidor(registro) {
    let patente = registro.patente;
    console.log(patente);
    let r = await fetch(`/vehiculos/${patente}`, { "method": "PUT", "headers": { "Content-Type": "application/json" }, "body": JSON.stringify(registro)});      
    return (r.ok);
}

function mostrarVehiculo() {
    const alert = `<div class="alert alert-danger alert-dismissible" role="alert">
        Debe completar la patente para continuar.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`;

    let patenteValue = patenteABuscar.value;

    if (!patenteValue) {
        alertContainer.innerHTML = alert;
        patenteABuscar.classList.add('is-invalid'); 
        return false;
    } else {
        load();
        alertContainer.innerHTML = "";
        patenteABuscar.value = "";
        return true;
    }
}

function guardarVehiculo() {
    if (validarCampos()) {
        let json = crearJSONdeCampos();
        if (!editar) {
            console.log("Creando Vehiculo:")
            if (agregarAServidor(json)) {
                load();
                limpiarCampos()
                ocultarFormulario();
            }
            else {
                alert ("Error grabando en servidor");
            }
        } else {
            console.log("Editando Vehiculo:")
            if (confirm("Está a punto de editar el vehículo patente "+json.patente+"\n¿Desea continuar?")) {
                if (actualizarEnServidor(json)) {
                    load();
                    limpiarCampos()
                    ocultarFormulario();
                }
                else {
                    alert ("Error actualizando en servidor");
                }
            } else {
                cancelar();
            }
        }
    }
}

function editarPorPatente() {
    let patenteAEditar = this.getAttribute("data-patente");
    let vehiculoAEditar = null;
    
    vehiculos.forEach(vehiculo => {
        if (vehiculo.patente == patenteAEditar)
        vehiculoAEditar = vehiculo;
    });

    if (vehiculoAEditar) {
        editar = true;
        mostrarFormulario();      
        inputTipo.value = vehiculoAEditar.tipo;
        inputMarca.value = vehiculoAEditar.marca;
        inputModelo.value = vehiculoAEditar.modelo;
        inputAnio.value = vehiculoAEditar.anio;
        inputPrecio.value = vehiculoAEditar.precio;
        inputKilometraje.value = vehiculoAEditar.kilometraje;
        inputCapacidad.value = vehiculoAEditar.capacidad;
        inputPatente.value = vehiculoAEditar.patente;
        inputPuertas.value = vehiculoAEditar.puertas;
        inputAirbags.value = vehiculoAEditar.airbags;
        inputFuncionaOk.value = vehiculoAEditar.funcionaOk;
    } else {
        alert ("No se encontró el vehículo. Verifique la patente e intente nuevamente");
    }
}

function eliminarPorPatente() {
    let patenteAEliminar = this.getAttribute("data-patente");
    if (confirm("Está a punto de eliminar el vehículo patente "+patenteAEliminar+"\n¿Desea continuar?")) {
        eliminarDeServidor(patenteAEliminar);
    }
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
    if (editar) {        
        inputPatente.readOnly = true;
    }
}
function ocultarFormulario() {
    fomulario.style.display = "none";
    acciones.style.display = "flex";
    limpiarValidacion();
    if (editar) {        
        inputPatente.readOnly = false;
        editar = false;
    }
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
    patenteABuscar.classList.remove('is-invalid'); 
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
        "capacidad": inputCapacidad.value,
        "marca": inputMarca.value,
        "modelo": inputModelo.value,
        "anio": inputAnio.value,
        "precio": inputPrecio.value,
        "kilometraje": inputKilometraje.value,
        "patente": inputPatente.value,
        "puertas": inputPuertas.value,
        "airbags": inputAirbags.value,
        "funcionaOk": inputFuncionaOk.value
    }
}

function mostrarTablaVehiculos() {
    limpiarValidacion();
    let vehiculo = "";
    let html = "";
    for (let i = 0; i < vehiculos.length; i++) {
        const r = vehiculos[i];
        vehiculo = r;
        html += filaTablaVehiculo(vehiculo);
    }
    tblVehiculos.innerHTML = html;
    let btnsEliminar = document.querySelectorAll(".btnElimPorPatente");
    let btnsEditar = document.querySelectorAll(".btnEditPorPatente");
    btnsEditar.forEach(b => {b.addEventListener("click", editarPorPatente)});
    btnsEliminar.forEach(a => {a.addEventListener("click", eliminarPorPatente)});
}

function filaTablaVehiculo(vehiculo) { 
    let html = "";
    html += `
    <tr>
    <td class="text-capitalize">${vehiculo.tipo}</td>
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
    <td><button type="button" class="btnEditPorPatente btn-sm btn-primary mr-1" data-patente=${vehiculo.patente}><i class="fa fa-pencil"></i></button><button type="button" class="btnElimPorPatente btn-sm btn-danger" data-patente=${vehiculo.patente}><i class="fa fa-trash"></i></button></td>
    </tr>
    `;
    return html;
}





