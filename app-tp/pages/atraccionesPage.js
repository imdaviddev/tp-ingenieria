import { colocarMarcador, crearMapa, hacerZoomEnMapa, tiposIcons } from "../api/mapa.js";
import { obtenerAtracciones } from "../data/atracciones.js";
import { coordenadasProductos } from "../data/productos.js";
import { crearAtraccionCard } from "../js/disenio.js";

const atraccionesListados = []


document.addEventListener("DOMContentLoaded", async function () {
    // ------------------------------
    const buscador = document.querySelector(".buscador");
    const galeria = document.querySelector(".galeria");
    const btnBuscar = document.querySelector(".buscador").getElementsByTagName("button");
    // Mapa
    const contenedorMapa = document.querySelector(".contenedor-mapa");
    const map = crearMapa(contenedorMapa);
    try {
      // Obtener los atracciones
      let atracciones = await obtenerAtracciones();
      let index = 0;

      // Mostrar los atracciones
      atracciones.forEach(p => {


        let nuevaAtraccion = crearAtraccionCard(p.titulo, undefined, p.imagen)
  
        // Cargo los diferentes marcadores
        colocarMarcador(map, coordenadasProductos[index], tiposIcons.atraccion);
        galeria.appendChild(nuevaAtraccion);

        index++;
      });
  
      // Resto de la lógica del código...
    } catch (error) {
      console.error('Error al obtener y mostrar los atracciones:', error);
    }
    
    
    // La función e() debería ser invocada para que tenga efecto
    const e = async () => {
        for (let i = 0; i < galeria.getElementsByClassName("card").length; i++) {
            galeria.getElementsByClassName("card")[i].addEventListener("click", function () {
                hacerZoomEnMapa(map, coordenadasProductos[i]);
            });
        }
    };

    // Invocar la función e para que tenga efecto
    e();
});
  

