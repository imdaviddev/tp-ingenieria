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

// FUNCIONES PARA CREAR CARDS
export function crearProductoCard(titulo = "Producto", 
            precio = 10000, 
            descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod accumsan velit, nec di", 
            imagen = "https://via.placeholder.com/300"
      ){
      let productoElement = document.createElement("div");
      productoElement.classList = "card";
      let html = `
        <img src=${imagen} alt="Product Image">
        <div class="card-content">
            <div class="card-titulo">${titulo}</div>
            <div class="card-precio">$${precio}</div>
            <div class="card-descripcion">
                ${descripcion}
            </div>
        </div>
      `
      productoElement.innerHTML = html;
    
      return productoElement;
    }


export function crearAtraccionCard(titulo = "Atraccion",  
      descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod accumsan velit, nec di", 
      imagen = "https://via.placeholder.com/300"
){
let productoElement = document.createElement("div");
productoElement.classList = "card";
let html = `
      <img src=${imagen} alt="Product Image">
      <div class="card-content">
            <div class="card-titulo">${titulo}</div>
            <div class="card-descripcion">
                  ${descripcion}
            </div>
      </div>
`
productoElement.innerHTML = html;

return productoElement;
}