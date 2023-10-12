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
    let btn;

    if (document.getElementById("iniciar-sesion-btn").style.display != "none"){
        btn = document.getElementById("iniciar-sesion-btn");
    }else{
        btn = document.getElementById("cerrar-sesion-btn");
    }
  
    // Obtener su ancho y alto
    const anchoBtn = btn.offsetWidth;
  
    // Aplicar las dimensiones al elemento 2
    const logo = document.getElementById("logo");
    logo.style.width = anchoBtn + "px";
  }
  