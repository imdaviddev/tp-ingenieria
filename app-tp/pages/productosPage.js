const productosListados = []

document.addEventListener("DOMContentLoaded", function(){
    // ------------------------------
    const buscador = document.querySelector(".buscador");
    const galeria = document.querySelector(".galeria");
    const btnBuscar = document.querySelector(".buscador").getElementsByTagName("button");

    // Obtener los proudctos 


    // Mostrar los productos
    galeria.appendChild(crearProductoCard());
    galeria.appendChild(crearProductoCard());
    galeria.appendChild(crearProductoCard());
    galeria.appendChild(crearProductoCard());
    galeria.appendChild(crearProductoCard());
    galeria.appendChild(crearProductoCard());
    galeria.appendChild(crearProductoCard());

    // Logica del buscador


    // 



});

// FUNCIONES PARA CREAR CARDS
export function crearProductoCard(producto){
    let productoElement = document.createElement("div");
    productoElement.classList = "producto";
    let html = `
      <img src="https://via.placeholder.com/300" alt="Product Image">
      <div class="producto-content">
          <div class="producto-titulo">Nombre del Producto</div>
          <div class="producto-precio">$99.99</div>
          <div class="producto-descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod accumsan velit, nec dictum
              velit mattis eu.
          </div>
      </div>
    `
  
    productoElement.innerHTML = html;
  
    return productoElement;
  }