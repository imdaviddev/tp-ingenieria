const urlImagen = "assets/centros-y-moviles-de-ayuda/";

export const centros_moviles = [
        {
            "titulo": "Centro de Villa Carlos Paz",
            "descripcion": "SDAIOJDAS",
            "imagen": urlImagen + "centro-1.jpg",
            "coordenadas": [-31.41743476212216, -64.49429346394443],
            "tipo": "centro"
        },
        {
            "titulo": "Centro de Arturias",
            "descripcion": "SDAIOJDAS",
            "imagen": urlImagen + "centro-2.jpg",
            "coordenadas": [-31.41743476212216, -64.49429346394443],
            "tipo": "centro"
        },
        {
            "titulo": "Centro de Costanera Sur",
            "descripcion": "SDAIOJDAS",
            "imagen": urlImagen + "centro-3.jpg",
            "coordenadas": [-31.41743476212216, -64.49429346394443],
            "tipo": "centro"
        },
        {
            "titulo": "Centro de Lion Joaco",
            "descripcion": "SDAIOJDAS",
            "imagen": urlImagen + "centro-4.webp",
            "coordenadas": [-31.41743476212216, -64.49429346394443],
            "tipo": "centro"
        },
        {
            "titulo": "Centro de Harrigan",
            "descripcion": "SDAIOJDAS",
            "imagen": urlImagen + "centro-5.jpg",
            "coordenadas": [-31.41743476212216, -64.49429346394443],
            "tipo": "centro"
        },
        {
            "titulo": "Movil de Arturias",
            "descripcion": "SDAIOJDAS",
            "imagen": urlImagen + "movil-1.jpeg",
            "coordenadas": [-31.421738295798857, -64.4972252930236],
            "tipo": "movil"
        },
        {
            "titulo": "Movil de Lion Joaco",
            "descripcion": "SDAIOJDAS",
            "imagen": urlImagen + "movil-2.jpg",
            "coordenadas": [-31.421738295798857, -64.4972252930236],
            "tipo": "movil"
        },
        {
            "titulo": "Movil de Costanera Sur",
            "descripcion": "SDAIOJDAS",
            "imagen": urlImagen + "movil-3.webp",
            "coordenadas": [-31.421738295798857, -64.4972252930236],
            "tipo": "movil"
        },
        {
            "titulo": "Movil de Harrigan",
            "descripcion": "SDAIOJDAS",
            "imagen": urlImagen + "movil-4.jpg",
            "coordenadas": [-31.421738295798857, -64.4972252930236],
            "tipo": "movil"
        },
        {
            "titulo": "Movil de Lisandro Lopez",
            "descripcion": "SDAIOJDAS",
            "imagen": urlImagen + "movil-5.jpeg",
            "coordenadas": [-31.421738295798857, -64.4972252930236],
            "tipo": "movil"
        },
        {
            "titulo": "Movil de Cardenas",
            "descripcion": "SDAIOJDAS",
            "imagen": urlImagen + "movil-6.jpeg",
            "coordenadas": [-31.421738295798857, -64.4972252930236],
            "tipo": "movil"
        },
]    
export async function obtenerCentros_Moviles(){
    return centros_moviles;
}
  
