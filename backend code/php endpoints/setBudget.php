<?php

header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
include 'db.php';

header("Content-Type: application/json");


$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

if($method == 'GET'){
    $username = $_GET['username'];
    $maxBud = $_GET['budget'];
    $stmt = $conn->prepare("Update user set totalBudget = ? where username = ? ");
    $stmt->bind_param("ds", $maxBud, $username );
    $stmt->execute();

    echo "It worked.";
}


    $stmt->close();
    $conn->close();
?>
