// FUNCIONES PARA MANEJAR EL MAPA
export function crearMapa(contenedor){
    let posicionBuenosAires = [-34.61315,  -58.37723]

    let mapaElement = document.createElement("div")
    mapaElement.id = 'map'
    contenedor.appendChild(mapaElement)

    let puntoPartida = posicionBuenosAires;
    let zoomInicial = 10
    let map = L.map('map').setView(puntoPartida, zoomInicial);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    return map;
}

export const tiposIcons = {
    centromovil : "assets/icons/icon-centro.png",
    movil : "assets/icons/icon-movil.png",
    tienda : "assets/icons/icon-tienda.png",
    atraccion : "assets/icons/icon-atraccion.png",
}
var iconoMapa = L.Icon.extend({
    options: {
        iconSize:     [70, 70], // size of the icon
        //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    }
});

function crearIcon(urlImagen){
    return new iconoMapa({iconUrl: urlImagen});
}
export function colocarMarcador(map, posicion, tipo = tiposIcons.atraccion){
    let marcador = L.marker(posicion, {icon: crearIcon(tipo)}).addTo(map)
    return marcador;
}
