<?php 

    include_once 'conexion.php';

    ob_start();

    $requestData = json_decode(file_get_contents('php://input'), true);
    error_log('JSON recibido: ' . print_r($requestData), true );

    //comprobar si se han recibido datos
    if(isset($requestData['categoria'])){
        $categoria = $requestData['categoria'];
        $fechaInicio = $requestData['fechaInicio'];
        $fechaFin = $requestData['fechaFin'];
        
        $fechaInicio .= ' 00:00:00';
        $fechaFin .= ' 23:59:59';

        //crear conexion para consultar a la BD
        $conexion = createConexion();
        if($conexion->connect_error){
            die("Error de conexión: " . $conexion->connect_error);
        }
        if($categoria === 'Todo'){
            $sql = "SELECT SUM(precio) AS total_precio
                    FROM detalleVenta
                    WHERE fecha_creacion BETWEEN ? AND ? ";
        
            $stmt = $conexion->prepare($sql);
            $stmt-> bind_param("ss", $fechaInicio, $fechaFin);

        }else{
            $sql = "SELECT SUM(precio) AS total_precio
                    FROM detalleVenta
                    WHERE categoria = ?
                    AND fecha_creacion BETWEEN ? AND ?";

            $stmt = $conexion->prepare($sql);
            $stmt->bind_param("sss", $categoria, $fechaInicio, $fechaFin);

        }

        $stmt->execute();
        $resultado = $stmt->get_result();
   
        if($resultado->num_rows>0){
            $fila = $resultado->fetch_assoc();
            $total_precio = $fila['total_precio'];

            // Devolver resultados como JSON
            ob_end_clean(); // Limpiar cualquier salida previa
            echo json_encode(array("success" => true, "total_precio" => $total_precio));    

        }else{
            ob_end_clean(); // Limpiar cualquier salida previa
            echo json_encode(array("success" => false, "message" => "No hay datos con la informacion proporcionada"));
        }

        $stmt->close();
        closeConexion($conexion);


    }else{
        ob_end_clean(); // Limpiar cualquier salida previa
        echo json_encode(array("success" => false, "error" => "No se recibieron datos."));
    }    
    