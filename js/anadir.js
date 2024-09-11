document.getElementById('cantidad').focus();
var total = 0;
var pintarPrecio; // variable de apoyo para pintar en el Dom con decimales
var identificador = 0;//ident. para poder eliminar en la vista
var idVenta = 0;

document.getElementById('anadir').addEventListener('click', function() {
    // Recoger los datos de los inputs
    var cantidad = document.getElementById('cantidad').value;
    var categoria = document.getElementById('categoria').value;
    var precio = document.getElementById('precio').value;
    var pintarTotal = document.getElementById('total');


    // Verificar que todos los campos estén completos
    if (!cantidad || !categoria || !precio) {
        alert('¡Rellena todos los campos!');
        return;
    }

    //operaciones con los precios 
    var precioTotal = (precio * cantidad).toFixed(2);
    pintarPrecio = precioTotal; // necesito el precioTotal en string, antes de parsearlo toFixed lo hace string
    precioTotal = parseFloat(precioTotal);
    total += precioTotal;


    //agregamos el poducto en el array
    agregarProducto(identificador, cantidad, categoria, parseFloat(precioTotal))

    

    // Crear nuevo elemento para la tabla/lista
    const listaProductos = document.getElementById('tabla-productos');
    //verificar si la tabla tiene cabeceras
    if (listaProductos.getElementsByTagName('th').length === 0){
        const cabeceras = document.createElement('tr');
        cabeceras.innerHTML =
        '<th>Cantidad</th>' +
        '<th>Categoría</th>' +
        '<th>Precio</th>';
        listaProductos.appendChild(cabeceras);
    }
    const nuevoProducto = document.createElement('tr');
    nuevoProducto.setAttribute('data-id', parseInt(identificador));
    nuevoProducto.innerHTML = 
    '<td>' + cantidad + '</td>' +
    '<td>' + categoria + '</td>' +
    '<td class="precio">' + pintarPrecio + '</td>' +
    '<td><button type="button" class="eliminar" data-id="' + identificador + '">Eliminar</button></td>';
    
    listaProductos.appendChild(nuevoProducto);
    pintarTotal.innerHTML='Total: ' + total.toFixed(2) + ' €';

    // Selecciona el botón por su ID y añade el evento
    //const botonEliminar = document.querySelector('.eliminar');
    //botonEliminar.addEventListener('click', eliminarProducto);
    
    botonesEliminar();

    identificador++;

    // Limpiar los campos del formulario para el próximo ingreso
    document.getElementById('cantidad').value = 1;
    document.getElementById('categoria').value = 'Regalos';
    document.getElementById('precio').value = 0.00.toFixed(2);

    //colocar el tab en el input cantidad
    document.getElementById('cantidad').focus();

});

     //manejar el cambio, dinero a devlover
var entrega = document.getElementById('entrega').value;
document.getElementById('cambio').addEventListener('click', function(){
    var resto = document.getElementById('resto');
    var entrega = document.getElementById('entrega').value;
    resto.innerHTML = 'Devolución: ' + (entrega - total).toFixed(2) + ' €';
});


//intentar manejar el bot'on eliminar de la lista

function botonesEliminar() {
    const botones = document.getElementsByClassName('eliminar');
    for (let i = 0; i < botones.length; i++) {
        botones[i].removeEventListener('click', eliminarProducto);
        botones[i].addEventListener('click', eliminarProducto);
    }
}

// Actualiza la función eliminarProducto si es necesario
function eliminarProducto() {
    const fila = this.parentNode.parentNode;
    const filaId = parseInt(fila.getAttribute('data-id')); // Obtener identificador de la fila
    const precioEliminar = parseFloat(fila.querySelector('.precio').textContent.replace('€', ''));
    total -= precioEliminar;
    document.getElementById('total').innerHTML = 'Total: ' + total.toFixed(2) + ' €';
    fila.parentNode.removeChild(fila);
    eliminarProductoArray(filaId);
}