<?php

include_once "conexion.php";
include_once "guardarVenta.php";

function insertarDatosTablas($requestData) {
    $conexion = createConexion();
    if ($conexion->connect_error) {
        echo "Error de conexión: " . $conexion->connect_error;
        return;
    }
    $response = [];
    // Recoger datos del array
    $metodoPago = $conexion->real_escape_string($requestData['metodoPago']);
    $total = calcularTotal($requestData);
    
    // Inserta en totalVenta y obtiene el ID generado
    $sqlTotalVenta = "INSERT INTO totalVenta (metodo_pago, total) VALUES ('$metodoPago', $total)";
    if (mysqli_query($conexion, $sqlTotalVenta)) {
        $idVenta = mysqli_insert_id($conexion);

        // Recorrer los objetos del array para insertar en detalleVenta
        $productos = $requestData['productos'];
        foreach ($productos as $elemento) {
            $cantidad = intval($elemento["cantidad"]);
            $categoria = $conexion->real_escape_string($elemento["categoria"]);
            $precio = floatval($elemento["precio"]);

            $sqlDetalleVenta = "INSERT INTO detalleVenta (id_venta, cantidad, categoria, precio) VALUES ($idVenta, $cantidad, '$categoria', $precio)";
            $result = mysqli_query($conexion, $sqlDetalleVenta);

           

            if ($result) {
                $response['status'] = 'success';
                $response['message'] = 'Datos en BD ok';
                $response['$idVenta'] = $idVenta;
            } else {
                $response['status'] = 'error';
                $response['message'] = 'Error con la BD: ' . mysqli_error($conexion);
            }
        }

            
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Error al insertar en totalVenta: ' . mysqli_error($conexion);
    }

    closeConexion($conexion);
    return $response;

    
}


        
        

function calcularTotal($requestData){
    $productos = $requestData['productos'];
    $precio = 0;
    foreach ($productos as $elemento){
        $precio += floatval($elemento['precio']);
    }
    return $precio;
}

