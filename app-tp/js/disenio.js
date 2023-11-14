// Ajustes 
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
            imagen = "https://via.placeholder.com/300",
            precioEnDolar = 10
      ){

      let precioEnDolares = precioEnDolar;
      let precioEnPesos = precio;

      let productoElement = document.createElement("div");
      productoElement.classList = "card";
      let html = `
        <img src=${imagen} alt="Product Image">
        <div class="card-content">
            <div>
                  <div class="card-titulo">${titulo}</div>
                  <div class="card-precio">
                        <div class="cotizacionEnPesos">$${precioEnPesos}</div>
                        <div class="cotizacionEnDolares hidden">USD${precioEnDolares}</div>
                  </div>
            </div>

            <div> 
                  <button class="cambiar">Cambiar a dolar</button>
                  <div class="card-descripcion">
                  ${descripcion}
                  </div>
            </div>
        </div>
      `
      productoElement.innerHTML = html;

      productoElement.querySelector(".cambiar").addEventListener("click", function(){
            let enPesos = productoElement.querySelector(".cotizacionEnPesos");
            let enDolares = productoElement.querySelector(".cotizacionEnDolares");
            enPesos.classList.toggle("hidden")
            enDolares.classList.toggle("hidden")
      })
    
      return productoElement;
    }


export function crearAtraccionCard(titulo = "Atraccion",  
      descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod accumsan velit, nec di", 
      imagen = "https://via.placeholder.com/300"
){
let atraccionElement = document.createElement("div");
productoElement.classList = "card";
let html = `
      <img src=${imagen} alt="Atraccion image">
      <div class="card-content">
            <div class="card-titulo">${titulo}</div>
            <div class="card-descripcion">
                  ${descripcion}
            </div>
      </div>
`
atraccionElement.innerHTML = html;

return atraccionElementElement;
}