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
    

    // Mapa
    const contenedorMapa = document.querySelector(".contenedor-mapa");
    crearMapa(contenedorMapa);

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

// FUNCIONES PARA MANEJAR EL MAPA
export function crearMapa(contenedor){
    let mapaElement = document.createElement("div")
    mapaElement.id = 'map'
    contenedor.appendChild(mapaElement)

    let puntoPartida = [-31.42414 , -64.49778] 
    let zoomInicial = 13
    let map = L.map('map').setView(puntoPartida, zoomInicial);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    return mapaElement;
}