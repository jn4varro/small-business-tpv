
document.getElementById('buscarCategoria').addEventListener('submit', function(event){
    event.preventDefault();

    //obtener datos del formulario
    const categoria = document.getElementById('categoria').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;
    const datos = {
        categoria: categoria,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin
    }
    //enviar los datos al backend
    fetch('http://localhost/coding/la_tiendita/php/categoria.php',{
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data =>{
        if(data.success){
            muestraDatos(categoria, fechaInicio, fechaFin, data.total_precio);
            console.log(data);
        }else{
            alert('algo ha salido mal' + data.error);
        }
    })
    .catch(error => console.log(error));
});
function muestraDatos(categoria, fechaInicio, fechaFin, total_precio){
    const resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML ='';//limpiar el resultado anterior
    //invertir las fechas
    const fechaInicioInvertida = fechaInicio.split('-').reverse().join('-');
    const fechaFinInvertida = fechaFin.split('-').reverse().join('-');

    resultDiv.innerHTML = 
        `<p>El precio total de la categoría: <b>${categoria}</b><br><br>
        desde la fecha: <b>${fechaInicioInvertida}</b><br><br>
        hasta la fecha: <b>${fechaFinInvertida}</b><br><br>
        es: <strong>${total_precio} €</strong></p>`;

}
