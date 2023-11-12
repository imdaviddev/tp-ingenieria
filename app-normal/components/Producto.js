const Producto = (producto) => {

    let html = `
        <div class="product-card">
            <img src="imagen-del-producto.jpg" alt="Producto" class="product-image" />
            <div class="product-info">
                <div class="product-title">Nombre del Producto</div>
            <div class="product-description">
                Descripción corta y atractiva del producto. Destaca las características clave.
            </div>
            <div class="product-price">$99.99</div>
                <button onclick="agregarAlCarrito()">Agregar al carrito</button>
            </div>
        </div>
    `

    const productoElement = document.createElement("div");
    productoElement.classList = "product-card";
    productoElement.innerHTML = html;

    return productoElement;
}

export default Producto;