document.getElementById('finCompra').addEventListener('click', function() {
    
    

    const venta = {
        productos: productos, // Array de productos
        metodoPago: document.getElementById('pago').value
        
    };

    // Verificar que el objeto venta no está vacío
    if (venta.productos.length === 0 || !venta.metodoPago) {
        console.error('Faltan datos en la venta');
        return;
    }

   

    const jsonString = JSON.stringify(venta).trim();

    fetch('http://localhost/coding/la_tiendita/php/guardarVenta.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: jsonString
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud Fetch');
        }
        return response.json();
    })
    .then(result => {
        console.log('Todo Okey Bro!', result);
        imprimirTicket(result);
        resetearVenta();
        
    })
    .catch(error => {
        console.error('Error en enviarBackend', error);
    });

});


function resetearVenta(){
    document.getElementById('tabla-productos').innerHTML= '';
    document.getElementById('total').innerHTML = '';
    total = 0;
    productos = [];
    resto.innerHTML = '';
    identificador = 0;

    // Limpiar los campos del formulario para el próximo ingreso
    document.getElementById('cantidad').value = 1;
    document.getElementById('categoria').value = 'Regalos';
    document.getElementById('precio').value = 0.00.toFixed(2);
    document.getElementById('entrega').value = 0.00.toFixed(2);
    //colocar el tab en el input cantidad
    document.getElementById('cantidad').focus();
}


function imprimirTicket(datos){
    
    if(datos.status === 'success'){
        const idVenta = datos.$idVenta;
        console.log('Esto funciona brou', idVenta);

        const data = JSON.stringify({ idVenta: idVenta });

        fetch('http://localhost/coding/la_tiendita/php/selectController.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: data
        })
        .then(response =>{
            if(!response.ok){
                throw new Error('Error en la solicitud Fetch');
            }
            return response.json();
        })
        .then(result =>{
            console.log('Todo perfect jefe', result);

             // Abre la ventana de ticket después de recibir la respuesta
             const ticketWindow = window.open('http://localhost/coding/la_tiendita/ticket.html');

             // Espera a que la ventana esté completamente cargada antes de enviar los datos
             ticketWindow.addEventListener('load', () => {
                 ticketWindow.postMessage(result, '*');
                });    

            if (typeof crearTicket === 'function') {
                console.log('crearTicket está definida');
                
            } else {
                console.error('crearTicket no está definida');
            }
        })
        .catch(error =>{
            console.error('Error al enviar al Back street', error);
        });

    }else{
        console.error('Error:', datos.message);
    }
    
}


   //--------------------------------------------------------------------------------------
//              P R O B A N D O  A Q U I  U N A  M O V I D A



function crearTicket(result){

    const tablaTicket = document.getElementById('tabla-ticket');
    const idVentaElement = document.getElementById('idVentaTicket');
    const metodoPagoElement = document.getElementById('metodoPagoTicket');
    const fechaElement = document.getElementById('fechaTicket');
    const totalElement = document.getElementById('totalTicket');
    
        //acceder al array de productos dentro de result.data
        const productos = result.data;
    
        // usar el primer objeto del array para obtener los datos que se repiten(id, metodopago etc...)
        const primeraVenta = productos[0];
        
        //actualizar el ticketDOM con los datos de la venta
        totalElement.innerHTML = primeraVenta.total;
        idVentaElement.innerHTML = primeraVenta.id;
        metodoPagoElement.innerHTML = primeraVenta.metodo_pago;
        fechaElement.innerHTML = primeraVenta.fecha_creacion;
    
        //limpiar la tabla antes de agregar nuevos productos
    
            tablaTicket.innerHTML='';
    
    
        //recorrer cada producto en el array y crear una fila en la tabla para cada uno    
            productos.forEach(producto => {
                const nuevoProducto = document.createElement('tr');
                nuevoProducto.innerHTML = `
                    <td>${producto.cantidad}</td>
                    <td>${producto.categoria}</td>
                    <td>${producto.precio}</td>
                `;
            tablaTicket.appendChild(nuevoProducto);    
        })
        console.log('esta llegando info al ticket bro');
        
    }
    
    
    //                     A Q U I  T E R M I N A  L A  M O V I D A
    //--------------------------------------------------------------------------------------

