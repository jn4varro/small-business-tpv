
//crear array productos y fincion para guardar los elementos de la venta
let productos = [];

function agregarProducto(identificador, cantidad, categoria, precio){
    let producto = {
        identificador:identificador,
        cantidad: cantidad,
        categoria: categoria,
        precio: precio
    };
    productos.push(producto);
    console.log(productos);
}

function eliminarProductoArray(identificador){
    const index = productos.findIndex(producto => producto.identificador === identificador);
    if (index !== -1) { // Si el producto se encuentra en el array
        productos.splice(index, 1);
        console.log(`Producto con identificador ${identificador} eliminado.`);
    } else {
        console.log(`Producto con identificador ${identificador} no encontrado.`);
    }
    console.log(productos);
}