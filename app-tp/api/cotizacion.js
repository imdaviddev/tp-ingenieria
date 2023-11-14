import { obtenerDatos } from "./fetch.js";

const url = "https://www.dolarsi.com/api/api.php?type=dolar";
const urlCotizador = "https://www.dolarsi.com/api/api.php?type=cotizador";


async function obtenerDolar() {
    try {
        const response = await fetch("https://www.dolarsi.com/api/api.php?type=cotizador");
        const data = await response.json();

        // Verificar si la respuesta contiene datos y si hay al menos dos elementos en el array
        if (Array.isArray(data) && data.length >= 2) {
            const dolarBlue = data[1];
            console.log("Segundo valor en los datos:", dolarBlue);
            return parseFloat(dolarBlue);
        } else {
            console.error("La respuesta no contiene datos válidos.");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
        return null;
    }
}

export async function obtenerCotizacionEnDolares(valorEnPesos) {
    // Obtener datos de la API
    const valorDelDolar = await obtenerDolar();

    if (valorDelDolar) {
        // Calcular el valor en dólares
        const valorEnDolares = valorEnPesos / valorDelDolar;
        console.log(`El valor ${valorEnPesos} en pesos equivale a ${valorEnDolares.toFixed(2)} en dólares.`);
        return valorEnDolares;
    } else {
        console.error("No se pudieron obtener datos de la API.");
        return null;
    }
}