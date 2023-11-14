export async function obtenerDatos(urlRequest) {
    try {
      const response = await fetch(urlRequest);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }