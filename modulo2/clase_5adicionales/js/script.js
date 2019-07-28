// Métodos Ejercicio 1.1 -------------------------------
let btnVerAmbos = document.querySelector('#btn-ambos');
let btnAlMenosUno = document.querySelector('#btn-almenosuno');
let input1 = document.querySelector('#in-campo1');
let input2 = document.querySelector('#in-campo2');
let divValidar = document.querySelector('#validar-campos');

btnVerAmbos.addEventListener('click', validarAmbos);
btnAlMenosUno.addEventListener('click', validarAlMenosUno);

function validarCampos() {
    if ( (input1.value === null || input1.value === undefined || input1.value === "" ) || (input2.value === null || input2.value === undefined || input2.value === "" ) ) {
        divValidar.classList.remove('d-none');
        return false;
    } else {
        divValidar.classList.add('d-none');
        return true;
    }
}

function validarAmbos() {
    if (validarCampos()) {
        if ( (input1.value >=0 && input2.value <0) || (input1.value <0 && input2.value >=0) ) {
            alert('Se Cumple la condición de que Uno es negativo y el otro es positivo');
        } else {
            alert('NO se Cumple la condición de que Uno es negativo y el otro es positivo');
        }
    }
}

function validarAlMenosUno() {
    if (validarCampos()) {
        if ( (input1.value >=0 ) || (input2.value >=0) ) {
            alert('Se Cumple la condición de que Al menos uno es positivo');
        } else {
            alert('NO se Cumple la condición de que Al menos uno es positivo');
        }
    }
}

// Métodos Ejercicio 1.2 -------------------------------
let btnNumeros = document.querySelector('#btn-numeros');

btnNumeros.addEventListener('click', generarCadena);

function generarCadena() {
    let cadena = "";
    for(let i=1; i<=100; i++) {
        cadena = cadena + i + " ";
    }
    console.log(cadena);
    btnNumeros.nextElementSibling.innerHTML = cadena;
}


// Métodos Ejercicio 1.3 -------------------------------
let btnToPrint = document.querySelector('#btn-printdiv');
let divToPrint = document.querySelector('#div-to-print'); 

function numeroAleatorio(maximo) {
    return Math.random()*maximo;
}
function colorAleatorio() {
    var r = numeroAleatorio(255);
    var g = numeroAleatorio(255);
    var b = numeroAleatorio(255);
    return "rgb("+r+","+g+","+b+")";
}

btnToPrint.addEventListener('click', function(){
    divToPrint.style.position = "absolute";
    divToPrint.style.width = numeroAleatorio(100) + "%";
    divToPrint.style.height = numeroAleatorio(100) + "%";
    divToPrint.style.top = numeroAleatorio(100) + "%";
    divToPrint.style.left = numeroAleatorio(100) + "%";
    divToPrint.style.background = colorAleatorio();
})

// Métodos Ejercicio 1.4 -------------------------------
let btnSubmit = document.querySelector('#btn-submit');
let inputName = document.querySelector('#name');
let inputLastname = document.querySelector('#lastname');
let inputEmail = document.querySelector('#email');
let inputMessage = document.querySelector('#message');
let result = document.querySelector('#result');

btnSubmit.addEventListener('click', validarFormulario);

function validarFormulario() {    
    inputName.classList.remove('border-danger');
    inputLastname.classList.remove('border-danger');
    inputEmail.classList.remove('border-danger');
    inputMessage.classList.remove('border-danger');

    if (
        (notEmpty(inputName.value) && validateLength(inputName.value, 3, 20)) 
        &&
        (notEmpty(inputLastname.value) && validateLength(inputLastname.value, 3, 20)) 
        &&
        (notEmpty(inputEmail.value) && validateMail(inputEmail.value)) 
        &&
        notEmpty(inputMessage.value) 
    ) {
        result.innerHTML = "El mensaje ha sido enviado con éxito!";
        result.classList.remove('text-danger');
        result.classList.add('text-success');
    } else {
        if (!notEmpty(inputName.value) || !validateLength(inputName.value, 3, 20)) {
            inputName.classList.add('border-danger');
        } 
        if (!notEmpty(inputLastname.value) || !validateLength(inputLastname.value, 3, 20)) {
            inputLastname.classList.add('border-danger');
        }
        if (!notEmpty(inputEmail.value) || !validateMail(inputEmail.value)) {
            inputEmail.classList.add('border-danger');
        }
        if (!notEmpty(inputMessage.value)) {
            inputMessage.classList.add('border-danger');
        }
        result.innerHTML = "El formulario tiene errores, por favor, revise los campos en rojo e intente nuevamente.";
        result.classList.remove('text-success');
        result.classList.add('text-danger');
    }
}


function notEmpty(texto) {
    if ( (texto != "") && (texto != null) && (texto != undefined) ) {
        return true;
    } else {
        return false;
    }
}
function validateLength(texto, min, max) {
    let length = texto.length;
    if ((length >= min ) && (length <= max )) {
        return true;
    } else {
        return false;
    }
}
function validateMail(texto) {
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return emailRegex.test(texto);
}


// Métodos Ejercicio 2.1 -------------------------------
let btnInvertir = document.querySelector('#btn-invertir-texto');
let inInvertir = document.querySelector('#texto-derecho');

btnInvertir.addEventListener('click', invertirTexto);

function invertirTexto() {
    let texto = inInvertir.value;
    let size = texto.length;
    let cadena = "";
    if (size > 0) {
        for (let i=0; i < size; i++ ) {
            cadena = cadena + texto.charAt((size-1)-i);
        }
        inInvertir.nextElementSibling.innerHTML = "";
        console.log(cadena);
    } else {
        inInvertir.nextElementSibling.innerHTML = "Por favor, ingrese un texto para continuar";
    }

}
// Métodos Ejercicio 2.2 -------------------------------
let botones = document.querySelectorAll('#botonera li > .btn');
let listas = document.querySelectorAll('#botonera ul');
console.log(botones);
console.log(listas);

// document.addEventListener('click',hideLists);
for (let i=0; i<botones.length;i++) {
    botones[i].addEventListener('click', function(e) {
        if (this.nextElementSibling) {
            hideLists();
            this.nextElementSibling.classList.remove('d-none');
        }
    });
}
function hideLists() {
    for (let j=0; j<listas.length;j++) {
        listas[j].classList.add('d-none');
    }
}

// Métodos Ejercicio 2.3 -------------------------------
let btnValidarFecha = document.querySelector('#btn-validar-fecha');
let inFecha = document.querySelector('#texto-fecha');

btnValidarFecha.addEventListener('click', validarFecha);

function validarFecha() {
    let fecha = inFecha.value;
    let reg = /(([0-2]?[0-9]|[3][01])[-]([0][0-9]|[1][0-2]|[0-9])([-]([0-2][0-9][0-9][0-9]|[0-9][0-9]))?)|(([0-2]?[0-9]|[3][01])[\/]([0][0-9]|[1][0-2]|[0-9])([\/]([0-2][0-9][0-9][0-9]|[0-9][0-9]))?)/g;

    if (reg.test(fecha)) {
        inFecha.nextElementSibling.innerHTML = "Fecha Válida";
        inFecha.nextElementSibling.classList.remove('text-danger');
        inFecha.nextElementSibling.classList.add('text-success');
    } else {
        inFecha.nextElementSibling.innerHTML = "Fecha Inválida";
        inFecha.nextElementSibling.classList.remove('text-success');
        inFecha.nextElementSibling.classList.add('text-danger');
    }
}

// Métodos Ejercicio 2.4 -------------------------------

let divBouncing = document.querySelector('#bouncing');

let arriba = true;
let bouncing = setInterval(function() {
    if (arriba) {
        divBouncing.style.top = "150px";
        arriba = false;
    } else {
        divBouncing.style.top = "0px";
        arriba = true;
    }
}, 1000);