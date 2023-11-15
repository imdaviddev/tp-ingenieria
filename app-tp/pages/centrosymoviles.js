import { colocarMarcador, crearMapa, hacerZoomEnMapa, tiposIcons } from "../api/mapa.js";
import { coordenadasProductos } from "../data/productos.js";
import { obtenerCentros_Moviles } from "../js/centros_moviles.js";
import { crearCentro_MovilCard } from "../js/disenio.js";

document.addEventListener("DOMContentLoaded", async function () {
        // ------------------------------
    const buscador = document.querySelector(".buscador");
    const galeria = document.querySelector(".galeria");
    const btnBuscar = document.querySelector(".buscador button");
    // Mapa
    const contenedorMapa = document.querySelector(".contenedor-mapa");
    const map = crearMapa(contenedorMapa);

    // Mostrar los centros y moviles
    try {
        let index = 0;
        let centros_moviles = await obtenerCentros_Moviles();

        // Mostrar los productos
        centros_moviles.forEach(async c_m => {
            // Cargo los diferentes marcadores
            colocarMarcador(map, coordenadasProductos[index], c_m.tipo === "movil" ? tiposIcons.movil : tiposIcons.centromovil);

            let nuevo = crearCentro_MovilCard(c_m.titulo, undefined, c_m.imagen);

            // Agregar evento de clic a la nueva tarjeta
            nuevo.addEventListener("click", function () {
                hacerZoomEnMapa(map, coordenadasProductos[index]);
            });

            galeria.appendChild(nuevo);

            index++;
        });
        // Resto de la lógica del código...
    } catch (error) {
        console.error('Error al obtener y mostrar los productos:', error);
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
  