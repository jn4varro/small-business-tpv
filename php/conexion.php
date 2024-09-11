<?php

    //crear conexion con base de datos
    define("DATABASE", "tpv_tienda");
    define("HOST", "localhost");
    define("USER", "root");
    define("PASSWORD", "");

    //funcion para crear conexion con la BD    
    function createConexion(){
        $conexion = mysqli_connect( HOST, USER, PASSWORD, DATABASE );
        if(!$conexion){
            die("Conexión fallida: " .mysqli_connect_error());
        }
        return $conexion;
           
    }

    function closeConexion($conexion){
        mysqli_close($conexion);
    }
