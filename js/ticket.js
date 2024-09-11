
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

