// Métodos de teoría - Ver mas, Ejercicio 1 y 2 -------------------------------
let btnsMostrar = document.querySelectorAll('.btn-mostrar');
for (let i=0; i<btnsMostrar.length; i++) {
    btnsMostrar[i].addEventListener('click', verMas);
}

function verMas(e) {
    //busca el hermano inmediato
    let el = this.nextElementSibling;
    //toggle de clase del hermano
    el.classList.toggle("d-none");

}

// Métodos de teoría - Reloj - Bomba -------------------------------
let iniciar = document.getElementById('iniciar');
let cancelar = document.getElementById('cancelar');
let tiempo = document.getElementById('tiempo');
let bomba = document.getElementById("bomba");
let bombaActiva = true;

iniciar.addEventListener('click', function(e) {
    if (tiempo.value != null && tiempo.value != "" && tiempo.value != undefined) {
        bombaActiva = true;
        tiempo.nextElementSibling.classList.add("d-none");
        iniciar.classList.add("d-none");
        cancelar.classList.remove("d-none");
        console.log("Bomba Activa: ", bombaActiva);
        setTimeout(iniciarReloj, 5000);
    } else {
        tiempo.nextElementSibling.classList.remove("d-none");
    }
})

cancelar.addEventListener('click', cancelarReloj);

function iniciarReloj() {    
    if (bombaActiva) {
        tiempo.setAttribute('disabled', true);
        cancelar.setAttribute('disabled', true);
        cancelar.innerText = "Bomba iniciada";
        bomba.classList.remove("d-none");
        i = tiempo.value * 1000;
        let intervalo = setInterval(function() {
            if (i <= 0) {
                clearInterval(intervalo);
                bomba.innerHTML = "<h1 class='text-danger'>BOOOOOOM!!!</h1>"
            } else {
                bomba.innerHTML = "<p>La bomba explotará en "+ i/1000 + " segundos.</p>"
                i = i - 1000;
            }
        }, 1000);
    }
}

function cancelarReloj() {
    bombaActiva = false;
    iniciar.classList.remove("d-none");
    cancelar.classList.add("d-none");
    console.log("Bomba Activa: ", bombaActiva);
}


// Métodos de Ejercicio 3 -------------------------------
let inputTarea = document.querySelector("#in-tarea");
let btnAgregar = document.querySelector("#add-tarea");
let lista = document.querySelector("#lista-tareas");

btnAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {
    let tarea = inputTarea.value;
    if (tarea != "" && tarea != undefined) {
        inputTarea.nextElementSibling.classList.add("d-none");
        var node = document.createElement("LI"); // Create a <li> node
        var textnode = document.createTextNode(tarea); // Create a text node
        node.appendChild(textnode);
        lista.appendChild(node);
        limpiarCampos();
    } else {
        inputTarea.nextElementSibling.classList.remove("d-none");
    }
}
function limpiarCampos() {
    inputTarea.value = "";
    inputTarea.focus();
}