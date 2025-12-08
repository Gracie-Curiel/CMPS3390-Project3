<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
include 'db.php';

header("Content-Type: application/json");


$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

if($method == 'GET'){
    $ID = $_GET['GId'];

    $stmt = $conn->prepare("Update gifts set cost = 0 Where GId = ?");
    $stmt->bind_param("i", $ID);
    $stmt->execute();


    $stmt = $conn->prepare("Update user Set spentBudget = (Select SUM(cost) From gifts Where username = (Select username From gifts Where GId = ? )) 
        Where username = (Select username From gifts Where GId = ?)");
    $stmt->bind_param("ii", $ID, $ID); 
    $stmt->execute();

    $stmt = $conn->prepare("Delete From gifts Where GId = ?");
    $stmt->bind_param("i", $ID);
    $stmt->execute();

    $stmt->close();
    $conn->close();
}
?>
