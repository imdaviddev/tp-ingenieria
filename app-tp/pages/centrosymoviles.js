import { colocarMarcador, crearMapa, tiposIcons } from "../api/mapa.js";
import { obtenerCentros_Moviles } from "../js/centros_moviles.js";
import { crearCentro_MovilCard } from "../js/disenio.js";

document.addEventListener("DOMContentLoaded", async function () {
    // ------------------------------
    const buscador = document.querySelector(".buscador");
    const galeria = document.querySelector(".galeria");
    const btnBuscar = document.querySelector(".buscador").getElementsByTagName("button");

    // Mostrar los centros y moviles
    try {
        let centros_moviles = await obtenerCentros_Moviles();

        // Mostrar los productos
        centros_moviles.forEach( async c_m => {
            galeria.appendChild(crearCentro_MovilCard(c_m.titulo, undefined, c_m.imagen));
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
  