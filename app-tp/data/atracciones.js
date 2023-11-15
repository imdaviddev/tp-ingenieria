import { posicionBuenosAires } from "../api/mapa.js";

const urlImagen = "assets/atracciones/"

export const atracciones = [
    {
        titulo: "Camponopolis",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [ posicionBuenosAires[0] + 0.2, posicionBuenosAires[1] + 0.1],
        imagen: urlImagen + "camponopolis.jpg",
    },
    {
        titulo: "Termas",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [ posicionBuenosAires[0], posicionBuenosAires[1]],
        imagen: urlImagen + "termas.jpg",
    },
    {
        titulo: "Treeland",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [ posicionBuenosAires[0], posicionBuenosAires[1]],
        imagen: urlImagen + "treeland.jpg",
    },
    {
        titulo: "Juguelandia",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [ posicionBuenosAires[0], posicionBuenosAires[1]],
        imagen: urlImagen + "juguelandia.jpg",
    },
    {
        titulo: "Parque Acuatico Poseidon",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [ posicionBuenosAires[0], posicionBuenosAires[1]],
        imagen: urlImagen + "parque-acuatico-poseidon.jpg",
    },
    {
        titulo: "Parque aereo Euca Tigre",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [ posicionBuenosAires[0], posicionBuenosAires[1]],
        imagen: urlImagen + "paque-aereo-euca-tigre.jpg",
    },
    {
        titulo: "Laberinto Las Totinas",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [ posicionBuenosAires[0], posicionBuenosAires[1]],
        imagen: urlImagen + "laberinto-las-totinas.jpg",
    },    
    {
        titulo: "Aquopolis",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [ posicionBuenosAires[0], posicionBuenosAires[1]],
        imagen: urlImagen + "aquopolis.jpg",
    },
    {
        titulo: "Argen Park",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [ posicionBuenosAires[0], posicionBuenosAires[1]],
        imagen: urlImagen + "argen-park.jpg",
    },

]

export async function obtenerAtracciones(){
    return atracciones;
}