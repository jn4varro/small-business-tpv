<?php

include_once 'selectModel.php';

//permitir solicitudes de cualquier origen CORS
header('Access-Control-Allow-Origin: *');

//permitir solicitudes POst
header('Access-Control-Allow-Methods: POST');

// Asegurar que el tipo de contenido sea JSON
header('Content-type: application/json');


$requestData = [];
$inputJson = file_get_contents('php://input');
$requestData = json_decode($inputJson, true); 

error_log('JSON recibido: ' . print_r($requestData, true));

if($requestData){
    $response = selectTicket($requestData);

    echo json_encode($response);
} else {
    // Enviar mensaje de error si no se reciben datos
    echo json_encode(array("message" => "No se recibieron datos"));

}