import { colocarMarcador, crearMapa, tiposIcons } from "../api/mapa.js";
import { obtenerProductos } from "../data/productos.js";
import { crearProductoCard } from "../js/disenio.js";
import { obtenerPrecioEnDolares } from "../api/cotizacion.js";

const productosListados = []

document.addEventListener("DOMContentLoaded", async function () {
    // ------------------------------
    const buscador = document.querySelector(".buscador");
    const galeria = document.querySelector(".galeria");
    const btnBuscar = document.querySelector(".buscador").getElementsByTagName("button");
    try {
        // Obtener los productos
        let productos = await obtenerProductos();

        // Mostrar los productos
        productos.forEach(async p => {
            let precioEnDolares = await obtenerPrecioEnDolares(parseFloat(p.precio));

            console.log("Precio en dólares:", precioEnDolares);

            galeria.appendChild(crearProductoCard(p.titulo, p.precio, undefined, p.imagen, precioEnDolares));
        });

        // Resto de la lógica del código...
    } catch (error) {
        console.error('Error al obtener y mostrar los productos:', error);
    }
    
    // Logica del buscador
  
    // Mapa
    const contenedorMapa = document.querySelector(".contenedor-mapa");
    const map = crearMapa(contenedorMapa);
  
    // Cargo los diferentes marcadores
    colocarMarcador(map, [-34.61315, -58.37723], tiposIcons.centromovil);
  });
  