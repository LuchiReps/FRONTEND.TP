// Función para el cartel fijo de la Sección Historia

window.onscroll = function() {
      var y = window.scrollY;

      var tema2 = document.getElementById('tema2').getBoundingClientRect();
      var tema3 = document.getElementById('tema3').getBoundingClientRect();

      var parrafo = document.getElementById('parrafo');

      if(tema2.top < 65 && tema2.top < tema3.top){
            parrafo.innerHTML = "TEMA 2";   
      }
      
      if(tema3.top < 65){
            parrafo.innerHTML = "TEMA 3";   
      }
      
      if(tema2.top > 399){
            parrafo.innerHTML = "TEMA 1";   
      }
};