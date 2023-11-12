
const FormularioLogin = () => {
    return `
    <!-- Btn Cerrar-->
    <button class="cerrar-login-btn" id="cerrar-login-btn">
        X
    </button>

    <!-- Login Form -->
    <div class="login-form">
        <form id="login-form">
            <h1>Iniciar Sesion</h1>
            <div class="contenedor">
                <div class="login-iniciar">
                    <img src="assets/icons/correo-icon.png" class="login-icon" alt="">
                    <input
                    type="text"
                    id="usuario"
                    name="usuario"
                    placeholder="ingresa usuario"
                    required
                    />
                </div>

                <div class="login-contrasenia">
                    <img src="assets/icons/contrasenia-icon.png" class="login-icon" alt="">
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="ingresa contraseña"
                    required
                    />
                </div>
            </div>

            <div class="opciones-login">
                <p class="registrarme">
                    Registrarme
                </p>
                <p class="olvido-contrasenia">
                    Olvide mi clave
                </p>
            </div>

            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
    `
};

export default FormularioLogin;