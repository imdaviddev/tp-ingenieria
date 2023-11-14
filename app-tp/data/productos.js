import { obtenerDatos } from "../api/fetch.js";

const urlAssets = "assets/productos/";

export const productos = [
    {
        titulo: "Producto",
        precio: 10000,
        descripcion: "ESTO ES UN PRODUCTO",
        imagen: "assets",
    },
];

export async function obtenerProductos() {
    try {
      let productos = [];
      let respuesta = await fetch('https://fakestoreapi.com/products?limit=15');
      
      if (!respuesta.ok) {
        throw new Error('Error al obtener los productos');
      }
  
      let datosProductos = await respuesta.json();
  
      for (let producto of datosProductos) {
        productos.push({
          titulo: producto.title,
          precio: producto.price,
          descripcion: producto.description,
          imagen: producto.image,
        });
  
        console.log({
          titulo: producto.title,
          precio: producto.price,
          descripcion: producto.description,
          imagen: producto.image,
        });
      }
  
      return productos;
    } catch (error) {
      console.error('Error:', error.message);
      return []; // o manejar el error según tus necesidades
    }
  }