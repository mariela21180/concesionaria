//Obtiene del DOM todos los elementos con clase ".btn". 
//A cada uno de esos botones les agrega un event listener para escuchar el evento 'click' con una función anónima.
//La función anónima, al hacer click en un boton, busca el siguiente elemento hermano (this.nextElementSibling;) del boton clickeado (en este caso un 'div') y le agrega/quita (toggle) la clase 'ver'. 
//Por defecto, los divs están ocultos (visibility: hidden;), y cuando tienen la clase 'ver' los muestra (visibility: visible;), les pone un fondo azul (background-color: blue;) y les pone el texto de color blanco (color: white;)


let btns = document.querySelectorAll('.btn');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e) {
    let el = this.nextElementSibling;
    el.classList.toggle("ver");
  });
}