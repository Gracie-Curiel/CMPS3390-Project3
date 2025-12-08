<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
include 'db.php';

header("Content-Type: application/json");


$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

if($method == 'GET'){
    $RId = $_GET['RID'];

    $stmt = $conn->prepare("Delete From recipient where ? = RId");
    $stmt->bind_param("d", $RId);
    $stmt->execute();

    echo "It worked.";



    $stmt->close();
    $conn->close();
}
?>
