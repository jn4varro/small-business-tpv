document.getElementById('buscarReferencia').addEventListener('submit', function(event) {
    event.preventDefault();

    const referencia = document.getElementById('referencia').value;

    fetch('http://localhost/coding/la_tiendita/php/ref.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ referencia: referencia })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            mostrarDatos(data.venta);
            console.log(data);
        } else {
            alert('Algo ha salido mal: ' + data.error);
        }
    })
    .catch(error => console.error('Error:', error));
});

function mostrarDatos(ventas) {
    const resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML = ''; // Limpiar el resultado anterior

    const cabeceras = document.createElement('tr');
    cabeceras.innerHTML = 
        '<th>Cantidad</th>' +
        '<th>Categoría</th>' +
        '<th>Precio</th>';
    resultDiv.appendChild(cabeceras);

    // Recorrer los datos
    ventas.forEach(venta => {
        const fila = document.createElement('tr');
        fila.innerHTML =
            `<td>${venta.cantidad}</td>` +
            `<td>${venta.categoria}</td>` +
            `<td>${venta.precio}</td>`;
        resultDiv.appendChild(fila);
    });

    const total = ventas[0].total;
    const fecha = ventas[0].fecha_creacion;
    const metodo_pago = ventas[0].metodo_pago;

    var final = document.createElement('div');
    final.innerHTML =
        '<hr>' +
        '<p id="total"> Total: '+ total +'</p>' +
        '<p>Fecha : ' + fecha + '</p>' +
        '<p>Método de pago : ' + metodo_pago + '</p>';
    resultDiv.appendChild(final);    
}

