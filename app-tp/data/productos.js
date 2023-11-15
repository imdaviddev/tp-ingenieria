import { obtenerDatos } from "../api/fetch.js";
import { posicionBuenosAires } from "../api/mapa.js";

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
        if(productos.length > 10){
          break;
        }

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

export const coordenadasProductos = [
  [-34.6, -58.7],
  [-34.92145, -57.95453],
  [-34.66667,-58.5],
  [	-34.58333,-58.41667],
  [-34.58333,-58.38333],
  [	-34.6,-58.51667],
  [-34.61477,-58.47971],
  [	-34.56667,-58.48333],
  [-34.63333,-58.51667],
  [-34.63333,-58.35],
  [-34.6,-58.48333],
  [-34.58333,-58.4],
  [-34.58333,-58.51667],
  [-34.65,-58.43333],
  [-34.55,-58.5],
  [-34.55,-58.46667],
  [-34.66667,-58.45]
]