<?php
include_once 'conexion.php';

$requestData = json_decode(file_get_contents('php://input'), true);
error_log("JSON recibido: " . print_r($requestData, true));

// Comprobar si se ha enviado el formulario
if (isset($requestData['referencia'])) {
    $referencia = $requestData['referencia'];

    $conexion = createConexion();
    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    $sql = "SELECT totalVenta.*, detalleVenta.id_venta, detalleVenta.cantidad, detalleVenta.categoria, detalleVenta.precio
            FROM totalVenta
            LEFT JOIN detalleVenta ON totalVenta.id = detalleVenta.id_venta
            WHERE detalleVenta.id_venta = ?";
    
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("i", $referencia);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $venta = array();
        while ($row = $result->fetch_assoc()) {
            $venta[] = $row;
        }
        // Devolver resultados como JSON
        echo json_encode(array("success" => true, "venta" => $venta));
    } else {
        echo json_encode(array("success" => false, "error" => "No se encontraron resultados para la referencia proporcionada."));
    }

    $stmt->close();
    closeConexion($conexion);

    
} else {
    echo json_encode(array("success" => false, "error" => "No se ha recibido ninguna referencia."));
}

