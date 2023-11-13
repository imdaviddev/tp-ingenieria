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

