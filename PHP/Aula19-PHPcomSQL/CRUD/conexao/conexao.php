<?php
$serverName = "localhost";
$userName = "root";
$password = "";
$dbName = "php";

//Criando Conexão
$conn = new mysqli($serverName, $userName, $password, $dbName);

//Validação de Conexão
if ($conn->connect_error){
    echo "Conexão feita com sucesso";
}


?>