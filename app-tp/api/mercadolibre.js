import { obtenerDatos } from './fetch.js';

export { obtenerDatos } from './fetch.js';

const url = "https://api.mercadolibre.com/sites/MLA/search?q=";

export async function obtenerProductosSimilares(producto, cantidad){
    try {
        const response = await fetch(url + producto);
        const data = await response.json().results;

        let productos = [];
        if(data){
            for(let producto in data){
                if(productos.length <= cantidad){
                    let nuevo = {
                        titulo: producto.title,
                        precio: producto.price,
                        imagen: producto.thumbnail
                    }    
                    productos.push(nuevo);
                }else {
                    break;
                }
            }
            return productos;
        }else {
            console.log("Hubo un error en la API de Mercado Libre");
            return null;
        }
    }catch (error) {
        console.error("Error al obtener datos de la API:", error);
        return null;
    }








}