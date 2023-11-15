
const urlImagen = "assets/atracciones/"

export const atracciones = [
    {
        titulo: "Camponopolis",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [20, 20],
        imagen: urlImagen + "camponopolis.jpg",
    },
    {
        titulo: "Termas",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [20, 20],
        imagen: urlImagen + "termas.jpg",
    },
    {
        titulo: "Treeland",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [20, 20],
        imagen: urlImagen + "treeland.jpg",
    },
    {
        titulo: "Juguelandia",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [20, 20],
        imagen: urlImagen + "juguelandia.jpg",
    },
    {
        titulo: "Parque Acuatico Poseidon",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [20, 20],
        imagen: urlImagen + "parque-acuatico-poseidon.jpg",
    },
    {
        titulo: "Parque aereo Euca Tigre",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [20, 20],
        imagen: urlImagen + "paque-aereo-euca-tigre.jpg",
    },
    {
        titulo: "Laberinto Las Totinas",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [20, 20],
        imagen: urlImagen + "laberinto-las-totinas.jpg",
    },    
    {
        titulo: "Aquopolis",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [20, 20],
        imagen: urlImagen + "aquopolis.jpg",
    },
    {
        titulo: "Argen Park",
        descripcion: "dklasdjklsadlsajdjasdsjal",
        posicion: [20, 20],
        imagen: urlImagen + "argen-park.jpg",
    },

]

export async function obtenerAtracciones(){
    return atracciones;
}