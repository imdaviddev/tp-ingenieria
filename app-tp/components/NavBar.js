
const NavBar = () => {
    let navbarElement = document.createElement("div");
    navbarElement.classList = "navbar-top";

    let html = `
       <nav id="navbar-hamburguesa">
            <div id="logo">
                <img src="assets/icons/icon-estrella.png" alt="">
            </div>
            <ul class="menu menu-hamburguesa">
                <div class="cerrar-hamburguesa">
                    <div class="cerrar">
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </div>
                <li id="inicio-btn">Inicio</li>
                <li id="atracciones-btn">Atracciones</li>
                <li id="productos-btn">Productos</li>
                <li id="ayuda-turistica-btn">Ayuda al turista</li>
                <li id="publicar-aviso-btn" class="hidden">Publicar aviso</li>
            </ul>
            <div class="controles-navbar">
                <button class="iniciar-sesion-btn" id="iniciar-sesion-btn">
                    Iniciar Sesion
                </button>

                <button id="cerrar-sesion-btn" class="hidden">
                    Cerrar Sesion
                </button>

                <div class="boton-hamburguesa">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
       </nav>
    `
    navbarElement.innerHTML = html;
    return navbarElement;
}

export default NavBar;