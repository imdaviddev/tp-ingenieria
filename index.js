/** Espero que el html cargue por completo para ejecutar la funcion ready */
document.addEventListener("DOMContentLoaded", ready);
function ready() {
  loginForm();

  const cerrarSesionBtn = document.getElementById("cerrar-sesion-btn");
  cerrarSesionBtn.addEventListener("click", cerrarSesion);
}

/** Funcion que controla el manejo del login */
function loginForm() {
  const loginForm = document.getElementById("login-form");
  const userList = document.querySelector(".navbar-top nav ul");
  let isLoggedIn = false; // Bandera de logueo
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = loginForm.querySelector('input[type="text"]').value;
    const passwordInput = loginForm.querySelector(
      'input[type="password"]'
    ).value;

    console.log("Usuario: " + usernameInput);
    console.log("Contraseña: " + passwordInput);

    if (!isLoggedIn && passwordInput === "1234") {
      if (usernameInput === "comerciante") {
        addListItem("Publicar Aviso");
        addListItem("Historial Avisos");
        isLoggedIn = true;
        deshabilitarInicioSesion();
      }
    }
  });

  // Agrega un elemento a la lista
  function addListItem(text) {
    const newItem = document.createElement("li");
    newItem.textContent = text;
    newItem.classList = "opcion-comerciante";
    userList.appendChild(newItem);
  }
}

function deshabilitarInicioSesion(){
    const loginPopup = document.getElementById("login-popup");
    loginPopup.style.display = "none";

    const btnInicioSesion = document.getElementById("iniciar-sesion-btn");
    btnInicioSesion.style.display = "none";

    const btnCerrarSesion = document.getElementById("cerrar-sesion-btn");
    btnCerrarSesion.style.display = "block";
}

function habilitarInicioSesion(){
    const btnInicioSesion = document.getElementById("iniciar-sesion-btn");
    btnInicioSesion.style.display = "block";

    const btnCerrarSesion = document.getElementById("cerrar-sesion-btn");
    btnCerrarSesion.style.display = "none";

    recargarPagina();
}

function cerrarSesion(){
    isLoggedIn = false;
    const userList = document.querySelector(".navbar-top nav ul");
    const comercianteItems = userList.querySelectorAll("li.opcion-comerciante");
    comercianteItems.forEach(item => {
      item.remove();
    });
    
    habilitarInicioSesion();
}

function recargarPagina() {
    location.href = location.href;
  }
  