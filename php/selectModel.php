<?php


    include_once 'conexion.php';
    

    function selectTicket($datos) {
             
        $conexion = createConexion();
        if($conexion->connect_error){
            return [
                'status' => 'error',
                'message' => 'Error de conexión: ' . $conexion->connect_error
            ];
        }
        
        $response = [];// array para guardar los resultados

        $idVenta = $conexion->real_escape_string($datos['idVenta']);//extraer el id de los datos recibidos

        //preparar el select a la BD
        $sqlSelect = "
            SELECT
                    totalVenta.id,
                    totalVenta.metodo_pago,
                    totalVenta.total,
                    totalVenta.fecha_creacion,
                    detalleVenta.cantidad,
                    detalleVenta.categoria,
                    detalleVenta.precio
            FROM
                    totalVenta
            JOIN
                    detalleVenta ON totalVenta.id = detalleVenta.id_venta     
            WHERE   
                    totalVenta.id = $idVenta";   
                    
                    
        $resultSelect = mysqli_query($conexion, $sqlSelect);
        
        if ($resultSelect && $resultSelect->num_rows > 0) {
            while ($row = mysqli_fetch_assoc($resultSelect)) {
                $response[] = $row;
            }
    
            closeConexion($conexion);
            return [
                'status' => 'success',
                'data' => $response
            ];
        } else {
            closeConexion($conexion);
            return [
                'status' => 'error',
                'message' => 'Error al recuperar la info: ' . mysqli_error($conexion)
            ];
        }
    }