
import { obtenerPrecioEnDolares } from '../api/cotizacion.js';
import { obtenerProductosSimilares } from '../api/mercadolibre.js';
import { crearProductoCard } from '../js/disenio.js';

document.addEventListener("DOMContentLoaded", async function() {
    // Variables
    const slider = document.querySelector('.galeria');

    const titulo = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");
    const precio = document.querySelector("#precio");
    const foto = document.querySelector("#foto");


    const confirmarButton = document.querySelector(".confirmar-button")
    const publicarButton = document.querySelector(".submit-button")

    // Evento formulario
    confirmarButton.addEventListener("click", publicacionProducto)
    publicarButton.addEventListener("click", mensajePublicacionConfirmacion)

    async function publicacionProducto(){
        if(validarCampos()){
            publicarButton.classList.toggle("hidden")
            confirmarButton.classList.toggle("hidden")
            mensajeMostrarProductos();
            mostrarProductosSimilares();
        }
    
    }

    async function mostrarProductosSimilares(){
        // Evento cargar los productos que son similares
        let productosSimilares = [];
        try {
            let productoCreadoTitulo = titulo.value;

            // Obtener los productos
            productosSimilares = await obtenerProductosSimilares(productoCreadoTitulo);

            // Mostrar los productos
            productosSimilares.forEach(async p => {
                console.log(p)
                let precioEnDolares = await obtenerPrecioEnDolares(parseFloat(p.precio));

                slider.appendChild(crearProductoCard(p.titulo, p.precio, undefined, p.imagen, precioEnDolares));
            });

            // Resto de la lógica del código...
        } catch (error) {
            console.error('Error al obtener y mostrar los productos:', error);
        }

    }


    function mensajeMostrarProductos(){
        Swal.fire({
            title: 'Se muestran productos similares',
            icon: 'info',
        })
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

    function validarCampos() {
        if (titulo.value === '' || descripcion.value === '' || precio.value === '' || foto.value === '') {
            mensaje('Todos los campos deben estar llenos');
            return false; // Detiene el proceso ya que hay campos vacíos
        }
    
        return true; // Indica que todos los campos están llenos
    }
    
    function mensaje(msg) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: msg,
        });
    }
    
})