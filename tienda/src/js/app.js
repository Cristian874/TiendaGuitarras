$(document).ready(function () {
    $(".header__menu").on("click", function () {
      $(".navegacion").slideToggle();
    });
  });




  document.addEventListener('DOMContentLoaded', function(){

    iniciarApp()
  })


function iniciarApp(){
    navegacionFija();

}

function navegacionFija(){

 window.addEventListener("scroll", function(){
   //leemos el scroll y agregamos las clases a los elementos 
   header = document.querySelector(".header__contenido");
    header.classList.toggle("abajo",window.scrollY > 0);
    a = document.querySelector(".activo");
    a.classList.toggle("blanco",window.scrollY > 0);

})    

}




 