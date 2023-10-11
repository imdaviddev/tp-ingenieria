document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const userList = document.querySelector(".navbar-top nav ul");
    let isLoggedIn = false; // Bandera de logueo
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const usernameInput = loginForm.querySelector('input[type="text"]').value;
        const passwordInput = loginForm.querySelector('input[type="password"]').value;

        console.log("Usuario: " + usernameInput);
        console.log("Contraseña: " + passwordInput);

        if (!isLoggedIn && passwordInput === "1234") {
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
            isLoggedIn = true;
        }
    });

    // Agrega un elemento a la lista
    function addListItem(text) {
        const newItem = document.createElement("li");
        newItem.textContent = text;
        userList.appendChild(newItem);
    }
});


