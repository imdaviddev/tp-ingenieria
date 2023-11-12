
const NavBar = () => {
    return `
    <nav>
        <div id="logo">
            <img src="assets/icons/icon-estrella.png" alt="">
        </div>
        <ul>
            <li id="inicio-btn">Inicio</li>
            <li id="atracciones-btn">Atracciones</li>
            <li id="productos-btn">Productos</li>
            <li id="ayuda-turistica-btn">Ayuda al turista</li>
        </ul>

        <button class="iniciar-sesion-btn" id="iniciar-sesion-btn">
            Iniciar Sesion
        </button>

        <button id="cerrar-sesion-btn">
            Cerrar Sesion
        </button>
    </nav>
    `
}

export default NavBar;