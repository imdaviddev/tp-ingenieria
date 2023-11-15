import { colocarMarcador, crearMapa, hacerZoomEnMapa, tiposIcons } from "../api/mapa.js";
import { coordenadasProductos, obtenerProductos } from "../data/productos.js";
import { crearProductoCard } from "../js/disenio.js";
import { obtenerPrecioEnDolares } from "../api/cotizacion.js";

document.addEventListener("DOMContentLoaded", async function () {
    const buscador = document.querySelector(".buscador");
    const galeria = document.querySelector(".galeria");
    const btnBuscar = document.querySelector(".buscador button");

    // Mapa
    const contenedorMapa = document.querySelector(".contenedor-mapa");
    const map = crearMapa(contenedorMapa);

    try {
        // Obtener los productos
        const productos = await obtenerProductos();

        // Mostrar los productos
        productos.forEach(async (p, index) => {
            const precioEnDolares = await obtenerPrecioEnDolares(parseFloat(p.precio));

            colocarMarcador(map, coordenadasProductos[index], tiposIcons.tienda);
            const nuevoProducto = crearProductoCard(p.titulo, p.precio, undefined, p.imagen, precioEnDolares, coordenadasProductos[index], map);
            galeria.appendChild(nuevoProducto);

            nuevoProducto.addEventListener("click", function () {
                hacerZoomEnMapa(map, coordenadasProductos[index]);
            });
        });

        // Resto de la lógica del código...
    } catch (error) {
        console.error('Error al obtener y mostrar los productos:', error);
    }

    // Agregar un evento de clic a cada tarjeta en la galería
    galeria.querySelectorAll(".card").forEach((card, index) => {
        card.addEventListener("click", function () {
            hacerZoomEnMapa(map, coordenadasProductos[index]);
        });
    });
});

  