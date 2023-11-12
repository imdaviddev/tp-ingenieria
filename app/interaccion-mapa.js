import { prueba } from "./js/centros-y.-moviles.js";

const map = L.map('map');

/** Espero que el html cargue por completo para ejecutar la funcion ready */
document.addEventListener("DOMContentLoaded", ready);
function ready() {
    /** Mapa variable */
    map.setView([-31.42414 , -64.49778], 15);

    /** Setear avisos */
    const listaAvisos = document.getElementById("lista-de-avisos");

    prueba.forEach( (aviso => {
        // Llama a la función para crear el elemento
        let nuevoAviso= crearAviso(aviso);
        // Puedes agregar el nuevo elemento a tu documento HTML
        listaAvisos.appendChild(nuevoAviso);
    }));

    /** Seteo del Mapa */
    setearMapa(map);
}

function crearAviso(aviso) {
    // Crea el elemento <li>
    let li = document.createElement('li');
  
    // Crea el elemento <div> con la clase "aviso"
    let avisoDiv = document.createElement('div');
    avisoDiv.className = 'aviso';
  
    // Crea el elemento <div> con la clase "aviso-imagen" y contenido
    let imagenDiv = document.createElement('div');
    imagenDiv.className = 'aviso-imagen';
    let imagen = document.createElement("img");
    imagen.src = aviso.imagen;
    imagenDiv.appendChild(imagen);

    // Creo el elemento <div> con la clase "aviso-titulo" y contenido 
    let tituloDiv = document.createElement('div');
    tituloDiv.className = 'aviso-titulo';
    tituloDiv.textContent = aviso.titulo;
  
    // Crea el elemento <div> con la clase "aviso-descripcion" y contenido
    let descripcionDiv = document.createElement('div');
    descripcionDiv.className = 'aviso-descripcion';
    descripcionDiv.textContent = aviso.descripcion;
  

    // Agrega los elementos secundarios al elemento principal
    avisoDiv.appendChild(tituloDiv);
    avisoDiv.appendChild(imagenDiv);
    avisoDiv.appendChild(descripcionDiv);
    li.appendChild(avisoDiv);

    interaccionMapa(li, aviso);


    return li;
  }

  function interaccionMapa(element, aviso){
    element.addEventListener("click", () => {
        let x = aviso.coordenadas[0];
        let y = aviso.coordenadas[1];

        map.setView([x, y], 18);

        var marker = L.marker([x , y]).addTo(map);
        marker.bindPopup("<b>Muncipalidad</b><br>Villa Carlos Paz.");
    })
  }

function setearMapa(map) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([-31.42414 , -64.49778]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");


    map.on('click', onMapClick);

    function onMapClick(click){
        var coordenada = click.latlng;
        var latitud = coordenada.lat; // lat  es una propiedad de latlng
        var longitud = coordenada.lng; // lng también es una propiedad de latlng
        alert("Acabas de hacer clic en: \n latitud: " + latitud + "\n longitud: " + longitud);
    };
}