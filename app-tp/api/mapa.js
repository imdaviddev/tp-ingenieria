document.addEventListener("DOMContentLoaded", function(){


    // ---------- INICIALIZACION DEL MAPA ------------------

    var map = L.map('map').setView([-31.42414 , -64.49778], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // --------------------------------------------------------------


    // ----------- MARCADORES DENTRO DEL MAPA -----------------------

    var marker = L.marker([-31.42414 , -64.49778]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

    // ------------------------------------------------------------------



});
