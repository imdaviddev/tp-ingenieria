document.addEventListener("DOMContentLoaded", ready);
function ready() {
  const cerrarLoginBtn = document.getElementById("cerrar-login-btn");
  const loginPopup = document.getElementById("login-popup");
  const iniciarSesionBtn = document.getElementById("iniciar-sesion-btn");


  cerrarLoginBtn.addEventListener("click", () => {
        loginPopup.style.display = "none";
  });

  iniciarSesionBtn.addEventListener("click", () =>{
        loginPopup.style.display = "flex";
  });
}
ajustarNav();

/** Funciones de Disenio */
function ajustarNav() {
    // Obtener boton iniciar sesion
    const elemento1 = document.getElementById("iniciar-sesion-btn");
  
    // Obtener su ancho y alto
    const anchoElemento1 = elemento1.offsetWidth;
  
    // Aplicar las dimensiones al elemento 2
    const elemento2 = document.getElementById("logo");
    elemento2.style.width = anchoElemento1 + "px";
  }
  