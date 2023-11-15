
import { obtenerPrecioEnDolares } from '../api/cotizacion.js';
import { crearProductoCard } from '../js/disenio.js';

document.addEventListener("DOMContentLoaded", async function() {
    // Variables
    const slider = document.querySelector('.galeria');
    const titulo = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");
    const precio = document.querySelector("#precio");

    const confrimarButton = document.querySelector(".confirmar-button")
    const publicarButton = document.querySelector(".publicar-button")

    // Evento formulario
    confrimarButton.addEventListener("click", function() {
        publicarButton.classList.toggle("hidden")
        confrimarButton.classList.toggle("hidden")
    })
    publicarButton.addEventListener("click", mensajePublicacionConfirmacion)

    // Evento publicar productp


    // Evento cargar los productos que son similares
    let productosSimilares = [];
    try {
        // Obtener los productos
        let productosSimilares = await obtenerProductosMercadoLibre();

        // Mostrar los productos
        productosSimilares.forEach(async p => {
            let precioEnDolares = await obtenerPrecioEnDolares(parseFloat(p.precio));

            galeria.appendChild(crearProductoCard(p.titulo, p.precio, undefined, p.imagen, precioEnDolares));
        });

        // Resto de la lógica del código...
    } catch (error) {
        console.error('Error al obtener y mostrar los productos:', error);
    }




    function mensajePublicacionConfirmacion(){
        Swal.fire({
            title: '¿Publicar Producto?',
            icon: 'normal',
            showCancelButton: true,
            confirmButtonText: 'Publicar',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
              if (result.isConfirmed) {
                 publicar();
              }
          });
    }

    function publicar(){
        Swal.fire({
            title: 'Publicado Exitosamente',
            icon: 'success',
        }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
        });
    }
})