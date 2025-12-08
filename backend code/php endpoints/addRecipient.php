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
    $Rname = $_GET['recipientName'];
    $relationship = $_GET['relationship'];
    $notes = $_GET['notes'];

    $stmt = $conn->prepare("Insert Into recipient (username, Rname, relationship, notes) Values (?,?,?,?)");
    $stmt->bind_param("ssss", $username, $Rname, $relationship, $notes);
    $stmt->execute();

    echo "It worked.";



    $stmt->close();
    $conn->close();
}
?>
