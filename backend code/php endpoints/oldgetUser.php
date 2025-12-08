<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
include 'db.php';

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

if($method == 'GET'){
    $stmt = $conn->prepare("Select * From user Where username = ?");
    $stmt->bind_param("s", $uName);
    $uName = $_GET['username'];
    $stmt->execute();

    $result = $stmt->get_result();
    $data = $result->fetch_assoc();
    echo json_encode($data);

    $stmt->close();
    $conn->close();
}
?>
