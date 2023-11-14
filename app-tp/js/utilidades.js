function generarCoordenadasBuenosAires() {
    // Rango de coordenadas para la provincia de Buenos Aires
    const rangoLatitud = [-38.5, -33.5]; // Latitud aproximada de la provincia
    const rangoLongitud = [-62, -56]; // Longitud aproximada de la provincia

    // Generar latitud y longitud aleatorias dentro del rango
    const latitud = Math.random() * (rangoLatitud[1] - rangoLatitud[0]) + rangoLatitud[0];
    const longitud = Math.random() * (rangoLongitud[1] - rangoLongitud[0]) + rangoLongitud[0];

    return { latitud, longitud };
}
