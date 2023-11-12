import { obtenerDatos } from './fetch.js';

export { obtenerDatos } from './fetch.js';

const url = "https://api.mercadolibre.com/sites/MLA/search?q=";

export async function obtenerProductosSimilares(producto, cantidad){
    let datos = obtenerDatos(url+producto);
    let productos = [];

    for(let dato of datos.results){
        let producto = {
            nombre: dato.title,
            imagen: dato.thumbnail,
            precio: dato.price,
        }

        productos.push(producto);
    }

    return productos;
}