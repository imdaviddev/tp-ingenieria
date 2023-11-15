import { colocarMarcador, crearMapa, tiposIcons } from "../api/mapa.js";
import { obtenerAtracciones } from "../data/atracciones.js";
import { crearAtraccionCard } from "../js/disenio.js";

const atraccionesListados = []


document.addEventListener("DOMContentLoaded", async function () {
    // ------------------------------
    const buscador = document.querySelector(".buscador");
    const galeria = document.querySelector(".galeria");
    const btnBuscar = document.querySelector(".buscador").getElementsByTagName("button");
  
    try {
      // Obtener los atracciones
      let atracciones = await obtenerAtracciones();
      console.log(atracciones)
      // Mostrar los atracciones
      atracciones.forEach(p => {
        console.log(p)
        galeria.appendChild(crearAtraccionCard(p.titulo, undefined, p.imagen));
      });
  
      // Resto de la lógica del código...
    } catch (error) {
      console.error('Error al obtener y mostrar los atracciones:', error);
    }
    
    // Logica del buscador
  
    // Mapa
    const contenedorMapa = document.querySelector(".contenedor-mapa");
    const map = crearMapa(contenedorMapa);
  
    // Cargo los diferentes marcadores
    colocarMarcador(map, [-34.61315, -58.37723], tiposIcons.centromovil);
  });
  

