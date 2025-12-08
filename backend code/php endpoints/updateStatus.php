<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
include 'db.php';

header("Content-Type: application/json");


$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

if($method == 'POST'){
    $status = $_GET['status'];
    $ID = $_GET['GId'];

    $stmt = $conn->prepare("Update gifts Set status = ? Where GId = ?");
    $stmt->bind_param("ii", $status, $ID);
    $stmt->execute();





    $stmt->close();
    $conn->close();
}
?>
