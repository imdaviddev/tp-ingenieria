/** Espero que el html cargue por completo para ejecutar la funcion ready */
document.addEventListener("DOMContentLoaded", ready);
function ready() {
  loginForm();
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
        /** Luego de iniciar sesion hay que quitar el formulario */
      }
      /**
             * Solo pedian que este el comerciante
            if (usernameInput === "supervisor") {
                addListItem("Alta Comerciantes");
                addListItem("Baja Comerciante");
                addListItem("Alta Personal");
            } else if (usernameInput === "comerciante") {
                addListItem("Publicar Aviso");
                addListItem("Historial Avisos");
            } else if (usernameInput === "personal") {
                addListItem("Alta Comerciantes");
            }
            **/
    }
  });

  // Agrega un elemento a la lista
  function addListItem(text) {
    const newItem = document.createElement("li");
    newItem.textContent = text;
    userList.appendChild(newItem);
  }
}

