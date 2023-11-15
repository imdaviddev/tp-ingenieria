import { obtenerDolar } from "./api/cotizacion.js";
import NavBar from "./components/NavBar.js";

/** Espero que el html cargue por completo para ejecutar la funcion ready */
document.addEventListener("DOMContentLoaded", async function(){
    // CARGAR NAVABAR 
    document.querySelector(".header").appendChild(NavBar());

    // LOGICA DE INICIO DE SESION
    loginForm();
  
    // -------- LINKS DE NAVEGACION -----------------
    const links = {
      index: document.getElementById("inicio-btn"),
      atracciones: document.getElementById("atracciones-btn"),
      productos: document.getElementById("productos-btn"),
      "ayuda-turistica": document.getElementById("ayuda-turistica-btn"),
      "publicar-aviso": document.getElementById("publicar-aviso-btn"),
    }
    for(let key in links){
      console.log(key)
      links[key]?.addEventListener("click", function(){
        window.location.href = key + ".html";
      })
    }
    // -------------------------------------------------

    // -------- HAMBURGUESA ---------------------------
    const btnCerrarHamburguesa = document.querySelector(".cerrar");
    const btnAbrirHamburguesa = document.querySelector(".boton-hamburguesa");
    const menuHamburguesa = document.querySelector(".menu");

    btnAbrirHamburguesa.addEventListener("click", function(){
        menuHamburguesa.classList.add("menu-hamburguesa");
    })

    btnCerrarHamburguesa.addEventListener("click", function(){
        menuHamburguesa.classList.remove("menu-hamburguesa");
    })

  });

/** ------ Funcion que controla el manejo del login ----- */
    function loginForm() {

    // ------------ LOGIN BOTON EVENTOS ----------------------------
    const cerrarLoginBtn = document.getElementById("cerrar-login-btn");
    const loginPopup = document.getElementById("login-popup");
    const iniciarSesionBtn = document.getElementById("iniciar-sesion-btn");
  
    cerrarLoginBtn?.addEventListener("click", () => {
          loginPopup.style.display = "none";
    });
  
    iniciarSesionBtn?.addEventListener("click", () =>{
          loginPopup.style.display = "flex";
          console.log();
    });
    
    // REVISO SI ESTA AUTENTICADO
    if(estaLogueado()){
        mostrarOpcionesUsuario();
    }

    // ------- CERRAR SESION ---------------------------
    const cerrarSesionBtn = document.getElementById("cerrar-sesion-btn");
    cerrarSesionBtn.addEventListener("click", mensajeCierreSesion);
    // -------------------------------------------------

    // -------------- login lOGICA --------------------------------
    const loginForm = document.getElementById("login-form");
    
    loginForm?.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // ------ OBTENGO LOS DATOS DEL FORMULARIO -------
      const usernameInput = loginForm.querySelector('input[type="text"]').value;
      const passwordInput = loginForm.querySelector(
        'input[type="password"]'
      ).value;
  
      console.log("Usuario: " + usernameInput);
      console.log("Contraseña: " + passwordInput);
      // ------------------------------------------------

      // ------ AUTENTICACION ---------------------------
      if(usuarioEsCorrecto(usernameInput)){
        if(contraseniaEsCorrecta(usernameInput, passwordInput)){
            iniciarSesion();
        }
      }else{

      }
      // -------------------------------------------------

    });
  }
/** ------------------------------------------------------------ */

/** ------------------------------------------------------------ */
// REVISO SI ESTA AUTENTICADO || SI ESTA LOGUEADO
function estaLogueado(){
    const usuarioAutenticado = document.cookie.includes("sesion=activa");
    return usuarioAutenticado ? true : false;
}
// FUNCION PARA MOSTRAR OPCIONES DE USUARIO
function mostrarOpcionesUsuario(){
    const btnLogin = document.querySelector("#iniciar-sesion-btn");
    const btnLogout = document.querySelector("#cerrar-sesion-btn");
    const btnPublicarAviso = document.querySelector("#publicar-aviso-btn");

    btnLogin?.classList.add("hidden");
    btnLogout?.classList.remove("hidden");
    btnPublicarAviso?.classList.remove("hidden");
}
// INICIAR SESION
function iniciarSesion(){
    
    const duracionDias = 1; 

    const fechaVencimiento = new Date();
    fechaVencimiento.setTime(
        fechaVencimiento.getTime() + duracionDias * 24 * 60 * 60 * 1000
    );

    document.cookie = `sesion=activa; expires=${fechaVencimiento.toUTCString()}; path=/`;

    mensajeExitoInicioSesion();
}
// CERRAR SESION
function cerrarSesion(){
  document.cookie = "sesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

  let path = /app-tp/
  if(window.location.pathname == path+"publicar-aviso.html"){
      window.location.href = "index.html";
  }else {
      recargarPagina();
  }
}
// REVISO SI EL USUARIO INGRESADO ES CORRECTO
function usuarioEsCorrecto(usuario){
    // AQUI HABRIA QUE REVISAR EL LOCAL STRAGE POR SI SE REGISTRO EN LA PAGINA
    return "comerciante" == usuario;
}
// REVISO QUE COINCIDA EL USUARIO CON LA CONTRASENIA
function contraseniaEsCorrecta(usuario, contrasenia){
    // LO MISMO QUE EN USUARIO ES CORRECTO
    return usuario == "comerciante" && contrasenia == "1234";
}

function mensajeExitoInicioSesion() {
  Swal.fire({
      title: 'Autenticación Exitosa',
      icon: 'success',
  }).then((result) => {
      if (result.isConfirmed) {
        recargarPagina();
      }
  });
}

function mensajeCierreSesion(){
  Swal.fire({
    title: '¿Seguro que quiere cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Cerrar Sesión',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
      if (result.isConfirmed) {
         cerrarSesion();
      }
  });
}

// RECARGO PAGINA
function recargarPagina() {
    location.reload();
}
/** ------------------------------------------------------------ */

/** ------------------------------------------------------------ */
//
function registrarUsuario(nombreUsuario, contrasenia){
    // OBTENER USUARIOS
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // ENCONTRAR SI EL NOMBRE DE USUARIO EXISTE
    const usuarioExistente = usuarios.find(user => user.nombre === nombreUsuario);

    if (usuarioExistente) {
        // MENSAJE DE ERROR
        console.log('El nombre de usuario ya existe. Por favor, elige otro.');
        return;
    }

    // AGREGAR EL NUEVO USUARIO A LA LISTA
    usuarios.push({ nombre: nombreUsuario, contrasenia });

    // VUELVO A ALMACENAR DENTRO DEL LOCAL STORAGE LA VARIABLE ACTUALIZADA
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // MENSAJE DE CONFIRMACION
    console.log('Usuario registrado con éxito.');
}

    