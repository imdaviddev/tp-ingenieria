/** Espero que el html cargue por completo para ejecutar la funcion ready */
document.addEventListener("DOMContentLoaded", function(){
  loginForm();

  // -------- LINKS DE NAVEGACION -----------------
  const links = {
    index: document.getElementById("inicio-btn"),
    atracciones: document.getElementById("atracciones-btn"),
    productos: document.getElementById("productos-btn"),
    "ayuda-turistica": document.getElementById("ayuda-turistica-btn"),
  }
  for(let key in links){
    console.log(key)
    links[key].addEventListener("click", function(){
      window.location.href = key + ".html";
    })
  }
  // -------------------------------------------------

  // ------- CERRAR SESION ---------------------------
  const cerrarSesionBtn = document.getElementById("cerrar-sesion-btn");
  cerrarSesionBtn.addEventListener("click", cerrarSesion);
  // -------------------------------------------------

});

/** Funcion que controla el manejo del login */
function loginForm() {
  const loginForm = document.getElementById("login-form");
  const userList = document.querySelector(".navbar-top nav ul");
  let isLoggedIn = false; // Bandera de logueo
  loginForm?.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = loginForm.querySelector('input[type="text"]').value;
    const passwordInput = loginForm.querySelector(
      'input[type="password"]'
    ).value;

    console.log("Usuario: " + usernameInput);
    console.log("Contraseña: " + passwordInput);

    if (!isLoggedIn && passwordInput === "1234") {
      if (usernameInput === "comerciante") {
        addListItem("Publicar Aviso", "publicar-aviso");
        isLoggedIn = true;
        deshabilitarInicioSesion();
      }
    }
  });

  // Agrega un elemento a la lista
  function addListItem(text, id_item) {
    const newItem = document.createElement("li");
    newItem.textContent = text;
    newItem.classList = "opcion-comerciante";
    newItem.id = id_item;
    newItem.addEventListener("click", function(){
      window.location.href = id_item + ".html";
    })
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
  