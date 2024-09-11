<?php

include_once "inserts.php";
include_once "gv.php";

// Permitir solicitudes de cualquier origen CORS
header("Access-Control-Allow-Origin: *");
// Asegurar que el tipo de contenido sea JSON
header("Content-type: application/json");
// Permitir métodos POST
header("Access-Control-Allow-Methods: POST");

// Leer el cuerpo de la solicitud
$requestData = [];
$inputJson = file_get_contents("php://input");
$requestData = json_decode($inputJson, true); // Decodificar el JSON a un array asociativo
// Para propósitos de depuración, puedes usar error_log
error_log("JSON recibido: " . print_r($requestData, true));

if ($requestData) {

    $response = insertarDatosTablas($requestData);

    // Enviar respuesta como JSON
    echo json_encode($response);
} else {
    // Enviar mensaje de error si no se reciben datos
    echo json_encode(array("message" => "No se recibieron datos"));
}


   