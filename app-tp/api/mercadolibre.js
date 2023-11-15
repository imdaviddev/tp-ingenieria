const url = "https://api.mercadolibre.com/sites/MLA/search?q=";

export async function obtenerProductosSimilares(producto, cantidad){
    try {
        const response = await fetch(url + producto);
        const datas = await response.json();
        let productos = [];
        if(datas){
            console.log(datas.results)
            const data = datas.results;
            for(let index = 0; index < data.length && index < 15; index++){
                let producto = data[index];
                console.log(producto);
                let nuevo = {
                    titulo: producto.title,
                    precio: producto.price,
                    imagen: producto.thumbnail
                }    
                productos.push(nuevo);
            }
            console.log(productos);
            return productos;
        }else {
            console.log("Hubo un error en la API de Mercado Libre");
            return null;
        }
    }catch (error) {
        console.error("Error al obtener datos de la API:", error);
        return null;
    }

}